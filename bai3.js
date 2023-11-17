const users = [
  { name: "User1", age: 25 },
  { name: "User2", age: 20 },
  { name: "User3", age: 22 },
  { name: "User4", age: 30 },
  { name: "User5", age: 16 },
];

const filterUsersByAge = (userlist,18,30) => {
    return userlist.filter(users => users.age => 18 && users.age <= 30)

};

const filteredUsers = filterUsersByAge(users, 18, 30);
console.log(filteredUsers);