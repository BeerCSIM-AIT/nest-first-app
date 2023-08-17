import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
    controllers: [AppController, ProductsController],
    providers: [ProductsService]
})
export class AppModule {};