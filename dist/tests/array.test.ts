describe("Array", function(){
    it('sholud be array', function(){
        const name: string[] = ["yusril", "iza", "mahendri"];
        const values: number[] = [1,2,3];

        console.info(name);
        console.info(values);
    });

    it('read only array', function(){
        const hobbies: ReadonlyArray<string> = ['membaca', 'menulis'];
        console.info(hobbies[0])
    });

    it('should support Tuple', function(){
        // tuple juga read only
        // example
        const person: readonly [string, number, boolean] = ['yusril', 24, true];
        console.info(person[0])
        console.info(person[1])
        console.info(person[2])
    });
});