

//Perfect Friend Find Section Start Here 

const friendsName = ['Shah Alam', 'Kawser', 'Sifat Rana', 'Rakibul', 'Nadim', 'Mahabul', 'Sifat', 'Kalam'];

function perfectFriend(friendName) {

    for (const name of friendName) {

        if (name.length == 5) {
            return name;
            break;
        }

    }
}


perfectFriend(friendsName);




//Perfect Friend Find Section End Here 




