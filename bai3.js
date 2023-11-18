let Students = [
  {
    name: "Ti",
    age: "20",
    address: "HO CHI MINH",
    email: "Ti@gmail.com",
  },
  {
    name: "Teo",
    age: "21",
    address: "Ha Noi",
    email: "teo@gmail.com",
  },
  {
    name: "To",
    age: "23",
    address: "DA NANG",
    email: "To@gmail.com",
  },
  {
    name: "Tin",
    age: "24",
    address: "DONG NAI",
    email: "Tin@gmail.com",
  },

  table_data = [(student["name"], student["age"], student["address"], student["email"],)
   for student in students]
headers = ["name", "age", "address", "email"]

let jsonStudent = JSON.stringify(Students);
console.log(jsonStudent);
let Students2 = JSON.parse(jsonStudent);
console.log(Students2);

];

