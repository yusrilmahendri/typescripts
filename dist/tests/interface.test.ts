import { Employee, Manager } from '../src/employee';
import { Seller } from "../src/seller";
import { sayHello } from '../../src/say-hello';
import { Person } from '../src/person';

describe("Interface", function(){
    it('should be interface', function(){
        const seller: Seller = {
            id: 1,
            name: "Toko ABC",
            nib: '232eaews',
        };
        console.info(seller);
    });

    it('should support function interface', function(){
        interface AddFunction   {
            (value1: number, value2: number): number;
        };
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };
        expect(add(2,2)).toBe(4);
    });

    it('should support indexable interface', function(){
        interface StringArray{
            [index: number]: string;
        }
        const names : StringArray = ["Yusril", "Mahendri"]
        console.info(names);
    });

    it('should suppoprt indexable interface for non number index', function(){
        interface StringDictionary{
            [key: string]: string;
        };
        const dictionary: StringDictionary = {
            "name": "yUSRIL",
            "address": "Indonesia",
        };
        console.info(dictionary["name"]);
        console.info(dictionary["address"]);
    });

    it('should support extends interface', function(){
        const employee: Employee = {
            id: "1",
            name: "Yusril",
            division: "IT",
        };

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Mahendri",
            division: "Software Engginer",
            numberOfEmployess: 10
        }
        console.info(manager);
    });

    it('should supoort function in interface', function(){
        const person: Person = {
            name: "Yusril",
            sayHello: function(name: string): string{
                return `Hello ${name} my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("iza"));

    });


    it('should support interfasection types', function(){
        interface HasName{
            name: string;
        }
        interface HasId{
            id: string;
        }
        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Yusril iza mahendri",
        }
        console.info(domain);
    });

    // mengubah type data
    it('should support type assertions', function(){
        const person: any = {
            name: "Yusril",
            age: 24,
        }
        //konversi value person
        const person2: Person = person as Person;
        console.info(person2);
    });
    
});
