const axios = require('axios');

axios({
    url: "http://localhost:4000/graphql",
    method: 'post',
    data: {
        query: `
        query{
            listPost{
            _id
            author
            content
            show
            }
        }
    `}
}).then(res => {
    console.log(res.data.data.listPost)
}).catch(function (error) {
    console.log('Error ' + error.message)
});