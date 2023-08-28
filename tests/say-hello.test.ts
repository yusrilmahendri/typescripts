import { sayHello } from "../src/say-hello"

describe ('sayHello', function(){
    it('should return hello yusril', function(){
        expect(sayHello('yusril')).toBe('Hello Yusril');
    });
});