import { Controller, Get, Param, Redirect, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':urlCode')
  // async findShortUrl(@Res() res,@Param('urlCode') id: string) {
  //   return res.redirect(await this.appService.findShortUrl(id));
  // }
}
