describe('if statement', function(){

    it('should be if statement', function(){
        const exampValue = 80;
        if(exampValue > 80){
            console.info("good")
        }else if(exampValue < 80){
            console.info("not bad")
        }else{
            console.info("bad")
        }
    });
});