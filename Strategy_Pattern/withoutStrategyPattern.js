function getPrice(originalPrice, typePromotion = "default") {
  if (typePromotion === "preOrder") {
    return originalPrice * 0.2;
  }

  if (typePromotion === "promotion") {
    return origialPrice <= 200 ? origialPrice * 0.1 : originalPrice - 30;
  }

  if (typePromotion === "blackFriday") {
    return origialPrice <= 200 ? origialPrice * 0.2 : originalPrice - 50;
  }

  if (typePromotion === "default") {
    return originalPrice;
  }
} // => Violate SOLID principles

console.log(getPrice(200, "blackFriday"));
