//No : 1, Convert Seer To Mon Functions Start Here
function seerToMon(seer) {
    if (typeof seer == 'number') {
        const OneMonEquSeer = 40;//OneMon = 40 seer
        const seerTotal = seer / OneMonEquSeer;
        return seerTotal;
    } else {
        return "Giver only number Value";
    }
}
const giveSeer = 100;
const seerResult = seerToMon(giveSeer);
// Convert Seer To Mon Functions Start Here
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
//NO : 3 Delivery Cost Function Start Here
function deliveryCost(shirtQuantity) {
    const firstOneHundredPriceAndQuantity = 100;
    const secondOneHundredPrice = 80;
    const thirdInfinityPrice = 50;
    if (typeof shirtQuantity == 'number') {
        if (shirtQuantity <= 100) {
            const totalDeliveryCostForFirstLoop = shirtQuantity * firstOneHundredPriceAndQuantity;
            return totalDeliveryCostForFirstLoop;
        }
        else if (shirtQuantity <= 200) {
            const firstOneHunPrice2 = firstOneHundredPriceAndQuantity * firstOneHundredPriceAndQuantity;
            const second2Hundred = shirtQuantity - firstOneHundredPriceAndQuantity;
            const second2HundredPrice1 = second2Hundred * secondOneHundredPrice;
            const totalDeliveryCostForSecondLoop = firstOneHunPrice2 + second2HundredPrice1;
            return totalDeliveryCostForSecondLoop;
        }
        else {
            const firstOneHunPrice3 = firstOneHundredPriceAndQuantity * firstOneHundredPriceAndQuantity;
            const secondMileStone = 200;
            const second3HundredQuantity = secondMileStone - firstOneHundredPriceAndQuantity;
            const second2HundredPrice2 = second3HundredQuantity * secondOneHundredPrice;
            const totalShirtForThirdLoop = firstOneHundredPriceAndQuantity + second3HundredQuantity;
            const findTotalForThirdLoop = shirtQuantity - totalShirtForThirdLoop;
            const thirdSubTotalCost = findTotalForThirdLoop * thirdInfinityPrice;
            const totalDeliveryCostForThirdLoop = firstOneHunPrice3 + second2HundredPrice2 + thirdSubTotalCost;
            return totalDeliveryCostForThirdLoop;
        }
    } else {
        return "Please Give Only Number Value";
    }
}
const totalProduct = 250;
const deliveryCostResult = deliveryCost(totalProduct);
//Delivery Cost Function End Here
//NO : 4 Perfect Friend Find Section Start Here
function perfectFriend(friends) {
    let perfectFriendName = friends[0];
    for (const names of friends) {
        if (names.length == 5) {
            perfectFriendName = names;
            break;
        }
    }
    return perfectFriendName;
}
const friendsName = ['Shah Alam', 'Kawser', 'Sifat Rana', 'Rakibul', 'Nadim', 'Mahabul', 'Sifat', 'Kalam'];
const result = perfectFriend(friendsName);
    //Perfect Friend Find Section End Here