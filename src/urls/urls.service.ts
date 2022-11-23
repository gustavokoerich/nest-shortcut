import { BadRequestException, CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { nanoid } from 'nanoid';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlEntity } from './entities/url.entity';

@Injectable()
export class UrlsService {

  constructor(@InjectRepository(UrlEntity) private readonly urlRepository: Repository<UrlEntity>,
  @Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async createUrl(longUrl: string) {
    const urlCode = nanoid(7);
    const baseUrl = "http://localhost:3000";
    const shortUrl = `${baseUrl}/${urlCode}`;

    const checkCode = await this.urlRepository.findOneBy({urlCode});

    if (checkCode) {
      const urlCode = nanoid(8);
    };

    const newShorten = this.urlRepository.create({
      urlCode,
      longUrl,
      shortUrl
    });

    await this.cache.set(urlCode, longUrl, 300000)

    return this.urlRepository.save(newShorten);
  }

  async shortenUrl(createUrlDto: CreateUrlDto) {
    const longUrl = createUrlDto.longUrl;

    const url = await this.urlRepository.findOneBy({longUrl});

    if (url) return {shortUrl: url.shortUrl};

    return await this.createUrl(createUrlDto.longUrl);
  }

  findAll() {
    return this.urlRepository.find();
  }

  async findAndRedirect(urlCode: string) {
    const cachedUrl = await this.cache.get(urlCode);

    if (cachedUrl) return cachedUrl;


    const url = await this.urlRepository.findOneBy({urlCode});
    
    if (url) {
      await this.cache.set(urlCode, url.longUrl, 300000);
      
      return url.longUrl;
    }

    throw new BadRequestException('UrlCode is invalid!');
  }
}
