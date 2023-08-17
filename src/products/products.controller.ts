import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express'
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService:ProductsService){}
    
    @Get()
    getAll(){
        return this.productsService.get();
    }

    @Get(':id')
    getOne(@Param() id: number){
        return id;
    }

    @Post()
    store(@Req() req: Request){
        return req.body
    }

    @Put(':id')
    updateUser(@Param() id: number){
        return id;
    }

    @Delete(':id')
    deleteUser(@Param() id:number){
        return id;
    }
}
