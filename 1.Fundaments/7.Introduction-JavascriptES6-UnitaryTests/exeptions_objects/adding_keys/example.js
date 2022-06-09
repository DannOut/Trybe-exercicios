/* const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

const daniel = {

} */

let daniel = {};
const addDaniel = (object, key, value) => {
 return object[key] = value
}
console.log(addDaniel(daniel, "surname", 'Outeiro'));
console.log(daniel);