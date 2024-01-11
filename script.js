let discountButton = document.getElementById("discountButton");

function calculateDiscount(price, discount) {
    // Given values
    const originalPrice = 299.00;
    const discountPercentage = 50;

    // Calculating discounted price
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const finalPrice = originalPrice - discountAmount;

}