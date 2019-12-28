describe ("FizzBuzz program", function() {
    describe("checks number divisibility", function() {

        beforeEach(function() {
            FB = new FizzBuzz();
        });
        
        it("should exist", function() {
            expect(FizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz when called as FizzBuzz(45)", function () {
            var result = FizzBuzz(45);
            expect(result).toBe("FizzBuzz");
        });
        it("should return FizzBuzz when called as FizzBuzz(1275)", function () {
            var result = FizzBuzz(1275);
            expect(result).toBe("FizzBuzz");
        });
        it("should return FizzBuzz when called as FizzBuzz(-15)", function () {
            var result = FizzBuzz(-15);
            expect(result).toBe("FizzBuzz");
        });
        it("should return Fizz when called as FizzBuzz(9)", function () {
            var result = FizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        it("should return Fizz when called as FizzBuzz(-27)", function () {
            var result = FizzBuzz(-27);
            expect(result).toBe("Fizz");
        });
        it("should return Fizz when called as FizzBuzz(-1293)", function () {
            var result = FizzBuzz(-1293);
            expect(result).toBe("Fizz");
        });
        it("should return Buzz when called as FizzBuzz(10)", function () {
            var result = FizzBuzz(10);
            expect(result).toBe("Buzz");
        });
        it("should return Buzz when called as FizzBuzz(-35)", function () {
            var result = FizzBuzz(-35);
            expect(result).toBe("Buzz");
        });
        it("should return Buzz when called as FizzBuzz(-65525)", function () {
            var result = FizzBuzz(-65525);
            expect(result).toBe("Buzz");
        });
        it("should return 22 when called as FizzBuzz(22)", function () {
            var result = FizzBuzz(22);
            expect(result).toBe(22);
        });
        it("should return -17 when called as FizzBuzz(-17)", function () {
            var result = FizzBuzz(-17);
            expect(result).toBe(-17);
        });
        it("should return \"something\" when called as FizzBuzz(\"something\")", function() {
            var result = FizzBuzz("something");
            expect(result).toBe("something");
        })
    })
})