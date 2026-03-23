import axios from "axios"

const response = axios.post('https://jsonplaceholder.typicode.com/posts', {
    title:  'newTask',
    body: 'CleanTheRoom',
    userId: '1',
}).then(res => console.log(res.data))