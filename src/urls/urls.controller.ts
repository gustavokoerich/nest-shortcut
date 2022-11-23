import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Controller()
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get(':urlCode')
  async findShortUrl(@Res() res, @Param('urlCode') urlCode: string) {
    return res.redirect(await this.urlsService.findAndRedirect(urlCode));
  }

  @Post('shorten')
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.shortenUrl(createUrlDto);
  }

  @Get('url/list')
  findAll() {
    return this.urlsService.findAll();
  }
}
