import { sayHello } from '../../src/say-hello';
describe('function', function(){
    it('should support in typescripts', function(){
        function sayHello(name: string): string{
            return `Hello ${name}`;
        }
        expect(sayHello("Yusril"));

        // if use void
        function printHello(name: string): void{
            console.info(`Hello ${name}`);
        }
        printHello("Yusril");
    });

    it('should support default values', function(){
        function sayHello(name: string = "Guest"): string{
            return `hELLO ${name}`;
        };
        expect(sayHello);
        expect(sayHello("Yusril iza"));
    });

    it('should support rest parameters', function(){
        function sum(...values: number[]): number{
            let total = 0;
            for(const value of values){
                total += value;
            }
            return total;
        }
        expect(sum(1,2,3,4,5));
    });

    it('should support parameters', function(){
        function sayHello(firstName: string, lastName: string): string{
            return `Hello ${firstName} and ${lastName}`; 
        }
        expect(sayHello("Yusril","mahendri"));
    });

    it('should support function overloading', function(){
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any{
            if(typeof value === 'string'){
                return value.toLocaleUpperCase();
            }else if(typeof value === 'number'){
                return value * 20;
            }
        }

        expect(callMe(10));
        expect(callMe("Yusril"));
    });

    it('shold support function as parameter', function(){
        function sayHello(name:string, filter: (name: string) => string){
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string{
            return name.toUpperCase();
        }
        expect(sayHello("Yusril", toUpper));

        // with anonymos function
        expect(sayHello("YUsril", function(name:string): string{
            return name.toUpperCase();
        }));

        // with arrow function 
        expect(sayHello("Yusril iza", (name: string): string => name.toUpperCase()));
    });
});