 const getCapitalizedInitials = (name) =>
   name
     .trim()
     .split(" ")
     .forEach((name) => name.charAt(0))
     .join("")
     .toUpperCase();

console.log(getCapitalizedInitials("Prueba"));