describe("FizzBuzz", function() {
  const fizzBuzz = new FizzBuzz();
  it("initializes a new FizzBuzz", function() {
    expect(fizzBuzz).toBeInstanceOf(FizzBuzz);
  });

  describe("#play", function() {
    describe("Numbers divisible by 3 and 5", function() {
      it("Returns Fizz given 15", function() {
        expect(fizzBuzz.play(15)).toBe("FizzBuzz");
      });
    });

    describe("Numbers divisible by only 3", function() {
      it("Returns Fizz given 3", function() {
        expect(fizzBuzz.play(3)).toBe("Fizz");
      });
    });

    describe("Numbers divisible by only 5", function() {
      it("Returns Buzz given 5", function() {
        expect(fizzBuzz.play(5)).toBe("Buzz");
      });
    });

    describe("Numbers not divisible by 3 or 5", function() {
      it("Returns '4' given 4", function() {
        expect(fizzBuzz.play(4)).toBe("4");
      });
    });
  });
});
