describe('Data Type', function(){
    it('should must declare', function(){
        const name: string = "Yusril Mahendri";
        const blance:  number = 10000;
        const isVip:boolean = true;

        console.info(name);
        console.info(blance);
        console.info(isVip);
    });

    it('should type data Any', function(){
        const person: any ={
            id: 1,
            name: "Yusril Mahendri",
            age: 30
        };

        person.age = 24;

        console.info(person)
    });

    it('should type data union type', function(){
        let sample: number | string | boolean = "Yusril Mahendri";
        sample = 24;
        console.info(sample);
        sample = true;
        console.info(sample);
    });

    it('should suppoert typeof operator', function(){
        function process(value: number | string | boolean){
            if(typeof value === "string"){
                return value.toUpperCase();
            }else if(typeof value === "number"){
                return value + 2;
            }else{
                return !value;
            }
        }

        expect(process('yusril')).toBe("YUSRIL");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });

});