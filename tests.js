// Unit tests for the helloWorld function
describe('sayHello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello!" when executed', function() {
      expect(sayHello()).toBe("Hello!");
    });
    it("should never return 'undefined' when called", function() {
      expect(sayHello()).not.toBe(undefined);
    });
});