import { CacheModule, Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlEntity } from './entities/url.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UrlEntity]), CacheModule.register({isGlobal: true})],
  controllers: [UrlsController],
  providers: [UrlsService]
})
export class UrlsModule {}
