
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
