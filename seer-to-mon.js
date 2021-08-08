// Convert Seer To Mon Functions Start Here 


function seerToMon(seer) {

    if (typeof seer == 'number') {
        const OneMonEquSeer = 40;//OneMon = 40 seer
        const seerTotal = seer / OneMonEquSeer;
        return seerTotal;
    } else {
        return "Giver only number Value";
    }

}

const seerResult = seerToMon(200);


console.log(seerResult);


// Convert Seer To Mon Functions Start Here