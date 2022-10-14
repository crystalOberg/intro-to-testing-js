// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHelloJane', function() {
    it('should be a defined function', function() {
        expect(typeof sayHelloJane).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHelloJane()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHelloJane()).toBe("Hello, Jane!");
    });
});
describe('sayHelloAlex', function() {
    it('should be a defined function', function() {
        expect(typeof sayHelloAlex).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHelloAlex()).toBe("string");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHelloAlex()).toBe("Hello, Alex!");
    });
});
describe('sayHelloPat', function() {
    it('should be a defined function', function() {
        expect(typeof sayHelloPat).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHelloPat()).toBe("string");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHelloPat()).toBe("Hello, Pat!");
    });
});