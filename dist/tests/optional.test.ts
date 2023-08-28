import { sayHello } from '../../src/say-hello';
describe('Optional Parameters', function(){
    it('should suppoert null and undefined', function(){

        function sayHello(name?: string | null){
            if(name){
                console.info(`Helli ${name}`);
            }else{
                console.info('Hello')
            }
        }

        sayHello("Yusril");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});