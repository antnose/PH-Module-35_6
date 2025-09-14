const isActive = true;

const showUser = () => console.log("Show User Green");
const hideUser = () => console.log("Hide User");

// isActive ? showUser() : hideUser();

// isActive && showUser();

// isActive || hideUser();

// // // // Browser Storage
// const handleAddToStorage = () => {
//   const name = document.querySelector("#name").value;
//   localStorage.setItem("name", name);
// };

// Bracket Notation
const person = {
  name: "Hero Alom",
  age: 10,
  friends: ["Korim", "Rohim", "Abul"],
  salary: 10000,
};

const heroName = person["name"];
console.log(heroName);
