// const person = {
//   name: 'JBX',
//   age: 32,
//   location: {
//     city: 'Sulphur',
//     temp: 92
//   }
// };

// const {name, age} = person;
// console.log(`${person.name} is ${person.age} years old.`);

// const {city, temp} = person.location;
// if(city && temp) {
//   console.log(`It's ${temp} in ${city}.`)
// }

const book = {
  title: 'lotr',
  author: 'jrrtolken',
  publisher: {
    name: 'someone'
  }
}

const {name: publisherName = 'Self-Published'} = boook.publisher;
console.log(`${publisherName}`)