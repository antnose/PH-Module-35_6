const isActive = true;

const showUser = () => console.log("Show User Green");
const hideUser = () => console.log("Hide User");

// isActive ? showUser() : hideUser();

// isActive && showUser();

// isActive || hideUser();

// // // // Browser Storate
const handleAddToStorate = () => {
  const name = document.querySelector("#name").value;
  localStorage.setItem("name", name);
};

// 11.58
