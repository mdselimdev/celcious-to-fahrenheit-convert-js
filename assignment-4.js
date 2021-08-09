

//Perfect Friend Find Section Start Here 
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




