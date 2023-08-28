import { Customer, CustomerType } from '../src/enum';

describe('enum', function(){
    it('should be enum', function(){
        const customer: Customer = {
            id: 1,
            name: "Yusril Mahendr",
            type: CustomerType.GOLD,
        };
        console.info(customer);
    });
});