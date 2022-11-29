import { UrlDto } from './dto/url.dto';

export class UrlBuilder {
  private dto: UrlDto;

  aUrl(): UrlBuilder {
    return new UrlBuilder();
  }

  withUrlCode(urlCode: string): UrlBuilder {
    this.dto.urlCode = urlCode;
    return this;
  }

  withLongUrl(longUrl: string): UrlBuilder {
    this.dto.longUrl = longUrl;
    return this;
  }

  withShortUrl(shortUrl: string): UrlBuilder {
    this.dto.shortUrl = shortUrl;
    return this;
  }

  build(): UrlDto {
    return this.dto;
  }
}
