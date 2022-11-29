import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js, .ts}'],
    }),
    UrlsModule,
  ],
})
export class AppModule {}
