


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

const friendsName = ['Shah Alam', 'Kawser', 'ashik', 'Sifat Rana', 'Rakibul', 'Nadim', 'Mahabul', 'Sifat', 'Kalam'];
const result = perfectFriend(friendsName);
// console.log(result);