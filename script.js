//HomeWorck 28.09.2022
function User(userName) {
    this.userName = userName;
    this.followers = [];
    this.following = [];
    this.addFollowing = function (newUser) {
        this.following.push(newUser);
        newUser.followers.push(this);
    },
        this.addFollower = function (newUser) {
            this.followers.push(newUser);
            newUser.following.push(this);
        },
        this.sendMessage = function (message) {
            this.followers.forEach((userName) => {
                userName.getMessage(message, userName, this.userName);
            });
        },
        this.getMessage = function (message, userName, answer) {
            console.log(answer + " sent a message to " + this.userName + ": " + "(" + message + ")");
        }
}

let user1 = new User('Tali');
let user2 = new User('Gil');
let user3 = new User('Ben');
let user4 = new User('Alex');

user1.addFollowing(user3); // Tali follows Ben
user2.addFollowing(user3); //Gil follows Ben
user3.addFollowing(user4); //Ben follows Alex

user2.addFollower(user1); //Tali follows Gil

user3.sendMessage("Please like my post");//Tali and Gil will receive a message
user1.sendMessage("please subscribe!!!!"); //no one will receive a message from Tali
user2.sendMessage("a party"); //Gil send to Tali messge
user4.sendMessage("When is the next lesson"); //Ben will get a message

