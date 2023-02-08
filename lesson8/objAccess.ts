let person = {
  name: "John",
  age: 30,
  email: "john@some.com",
};

console.log("Read name property from person object with dot notation:");
console.log(person.name);

console.log("Read name property from person object with bracket notation:");
console.log(person["name"]);

person.name = "Max";
person["name"] = "Max";

let propertyName = "email";
person[propertyName] = "new.email@com";

//new value is any, then no limit to the value
function setNewValueToObjectProperty(object, propertyName, newValue:any) {
  object[propertyName] = newValue;
}

setNewValueToObjectProperty(person, "name", "Max");
setNewValueToObjectProperty(person, "age", 40);
