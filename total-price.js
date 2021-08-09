
//No : 2 Total Price Function For a Gentle Shop Start Here
function totalSales(shirt, pant, shoes) {
    if (typeof shirt == 'number' && typeof pant == 'number' && typeof shoes == 'number') {
        const everyShirtPrice = 100;
        const everyPantPrice = 200;
        const everyShoesPrice = 500;
        const totalShirtPrice = everyShirtPrice * shirt;
        const totalPantPrice = everyPantPrice * pant;
        const totalShoesPrice = everyShoesPrice * shoes;
        const totalSalesPrices = totalShirtPrice + totalPantPrice + totalShoesPrice;
        return totalSalesPrices;
    } else {
        return 'Give only the number value';
    }
}
const shirtQuantity = 10;
const pantQuantity = 0;
const shoesQuantity = 0;
const subTotal = totalSales(shirtQuantity, pantQuantity, shoesQuantity);
// Total Price Function For a Gentle Shop End Here