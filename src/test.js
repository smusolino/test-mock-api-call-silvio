const axios = require('axios') 

const greet = name => 'Hola ' + name;

const users = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=3')
    return res.data;
}

// console.log(greet('Silvio'));

// users()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

module.exports = {
    users,
    greet
}