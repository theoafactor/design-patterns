const User =function(){


    this.firstname = null;
    this.lastname = "Jerry"
    this.gender = null;

    this.setFirstname = function(firstname){
        this.firstname = firstname
    }

    this.setGender = function(gender){
        this.gender = gender
    }

}


const user1 = new User;
const user2 = new User;

user1.setFirstname('adam');
user1.setGender('male');

user2.setFirstname('eve');
user2.setGender('female');

console.log(user1.firstname, user1.gender)
console.log(user2.firstname, user2.gender)







