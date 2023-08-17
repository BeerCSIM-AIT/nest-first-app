import { Controller, Get, Post, Req, Param, Put, Delete } from '@nestjs/common';
import { Request } from 'express'

@Controller({})
export class AppController {
    @Get()
    getUser(){
        let data = { name: "Phakpoom Ittirattanakomon", country: "Thailand" };
        return data;
    }

    // @Get(':id')
    // getOne(@Param() id: number){
    //     return id;
    // }
    
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