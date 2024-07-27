function preOrderPrice(originalPrice) {
  return originalPrice * 0.2;
}

function promotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.1 : originalPrice - 30;
}

function blackFridayPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.2 : originalPrice - 50;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

const getPriceStrategies = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  blackFriday: blackFridayPrice,
  default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrategies[typePromotion](originalPrice);
}

console.log(getPrice(200, "blackFriday"));
