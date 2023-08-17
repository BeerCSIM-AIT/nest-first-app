import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    get(){
        let data =[
            { id: 1, name: "Chocolate", price: 100 },
            { id: 2, name: "Strawberry", price: 100 },
            { id: 3, name: "Banana", price: 100 },
            { id: 4, name: "Kiwi", price: 100 },
            { id: 5, name: "Lemon", price: 100 },
        ];
        return data;
    }
}
