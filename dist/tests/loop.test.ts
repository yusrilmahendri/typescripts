describe('loop support', function(){

    it('should support for loop', function(){
        const names: string[] = ["yusril", "iza", "mahendri"];
        for(let i = 0; i < names.length; i++){
            console.info(names[i]);
        }

        // with for of 
        for(const name of names){
            console.info(name);
        }

        //with for in 
        for(const index in names){
            console.info(names[index]);
        }

    });

    it('should support while loop', function(){
        let counter = 0;
        while(counter < 10){
            console.info(counter);
            counter++;
        }
    });

    it('should support do while loop', function(){
        let x = 0;
        do{
            console.info(x);
            x++;
        }while(x < 10);
    });

    it('should support break and continue', function(){
        let y = 0;
        do{
            y++;
            if(y == 10){
                break;
            }
            if(y %2 == 0){
                continue;
            }
            console.info(y);
        }
        while(true);
    });

});