// javaScript Object Notation
// JSON
const user = { id: 11, name: 'Gorib amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Stor',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringfied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringfied);
const converted = JSON.parse(shopStringfied);
console.log(converted);
console.log(converted.owner);
