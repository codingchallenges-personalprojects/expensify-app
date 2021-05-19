const book = {
    title : 'Ego is an enemy',
    author : 'Ryan Holiday',
    publisher : {
        name : 'Penguin'
    }
}

const {name : publisherName = 'self-publisher'} = book.publisher;

console.log(publisherName); //Penguin, self-publisher



// Array destructuring

const item = ['coffee (hot)' , '$2.00' , '$2.50' , '$2.75'];
const [coffee , , medium] = item;

console.log(`A medium ${coffee} costs for ${medium}`);
