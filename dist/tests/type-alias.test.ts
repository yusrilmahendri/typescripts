import { Category, Product } from '../src/type-alias';

describe('typee alias', function(){
    it('should type alias', function(){
       const category: Category = {
            id: "1",
            name: "samsung s20",
       };

       const product: Product = {
            id: "1",
            name: "samsung s20",
            price: 1000,
            category: category
       };
       console.info(category);
       console.info(product);
    });
});