import { sayHello } from '../../src/say-hello';
describe('tenaray operator', function(){

    it('should be support tenary operator', function(){
        const exampValue = 80;
        const say = exampValue >= 75 ? "ongralations":"tray again";
        console.info(say);
    });

    it('switch statement', function(){
        function sayHello(name: string): string{
            switch(name){
                case "yusril":
                    return 'hi yusroil';
                case "budi":
                    return 'hi budi';
                default:
                    return 'hello';
            }
        }

        console.info(sayHello("budi"));
    });
});