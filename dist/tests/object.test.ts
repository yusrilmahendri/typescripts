describe('Object', function(){
    it('should type data object', function(){
        const person: {id: string, name:string} = {
            id: "1",
            name: "yusril"
        }
        console.info(person);
        person.id = "2";
        person.name = "yusril iza";
        console.info(person);
    });
});