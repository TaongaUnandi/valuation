//STEP 1 - Variable Declaration
const servicableObtainableMarket, currentAnnualizedRevenue, currentCustomers, averageRevenuePerCustomer, totalObtainableRevenue, profitMargin, obtainableGrossProfit, obtainableEbitda, obtainableValuation, investmentNeed, minimumInvestorReturn, investorOwnership, preMoneyValuation;

//STEP 2 - Writing Function
const calcValuation = function(){
  averageRevenuePerCustomer = currentAnnualizedRevenue / currentCustomers;
  totalObtainableRevenue =
  servicableObtainableMarket * averageRevenuePerCustomer;
  obtainableGrossProfit = totalObtainableRevenue * (profitMargin / 100);
  obtainableEbitda = obtainableGrossProfit * 0.67;
  obtainableValuation = obtainableEbitda * 3;
  minimumInvestorReturn = investmentNeed * 10;
  investorOwnership = minimumInvestorReturn / obtainableValuation;
  preMoneyValuation =
  investmentNeed / (investorOwnership / 100) - investmentNeed;

  return preMoneyValuation;
};

//STEP 3 - Call the function
calcValuation();

alert(`Your business is worth ${preMoneyValuation.toFixed(2)}`);
