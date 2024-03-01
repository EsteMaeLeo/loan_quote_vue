const calTotalPay = (quantity, time) => {
  let total;

  //more quantity less interest
  if (quantity < 5000) {
    total = quantity * 1.4;
  } else if (quantity >= 5000 && quantity < 10000) {
    total = quantity * 1.35;
  } else if (quantity >= 10000 && quantity < 20000) {
    total = quantity * 1.25;
  } else {
    total = quantity * 1.1;
  }
  console.log(total)
  if (time === 6) {
    total *= 1.1;
  } else if (time === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }  
  console.log(total)
  return total;
};

export { calTotalPay };
