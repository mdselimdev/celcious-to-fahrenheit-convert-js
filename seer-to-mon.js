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