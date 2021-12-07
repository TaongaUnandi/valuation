//STEP 1
const servicableObtainableMarket = Number(
  prompt("Enter servicable obtainable market")
);

//STEP 2
const currentAnnualizedRevenue = Number(
  prompt("Enter current anualized revenue")
);
const currentCustomers = Number(prompt("Enter current customers"));
const averageRevenuePerCustomer = currentAnnualizedRevenue / currentCustomers;

//STEP 3
const totalObtainableRevenue =
  servicableObtainableMarket * averageRevenuePerCustomer;

//STEP 4
const profitMargin = Number(prompt("Enter profit margin"));
const obtainableGrossProfit = totalObtainableRevenue * (profitMargin / 100);

//STEP 5
const obtainableEbitda = obtainableGrossProfit * 0.67;

//STEP 6
const obtainableValuation = obtainableEbitda * 3;

//STEP 7- Investment Estimation
const investmentNeed = Number(prompt("What investment amount do you need?"));

//STEP 8
const minimumInvestorReturn = investmentNeed * 10;

//STEP 9
const investorOwnership = minimumInvestorReturn / obtainableValuation;

//STEP 10
const preMoneyValuation =
  investmentNeed / (investorOwnership / 100) - investmentNeed;
alert(`Your business is worth ${preMoneyValuation.toFixed(2)}`);
