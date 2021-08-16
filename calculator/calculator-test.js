
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 1,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('85.61');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10006,
    years: 1,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('856.59');
});

it("should process very high interest rates", function() {
  const values = {
    amount: 10006,
    years: 1,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('1345.00');
});
