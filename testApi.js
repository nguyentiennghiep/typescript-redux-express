const axios = require('axios');


// axios({
//     url: "http://localhost:4000/graphql",
//     method: 'post',
//     data: {
//         query: `
//         query{
//             listPost{
//             _id
//             author
//             content
//             show
//             }
//         }
//     `}
// }).then(res => {
//     console.log(res.data.data.listPost)
// }).catch(function (error) {
//     console.log('Error ' + error.message)
// });

var post = {
    author: "test varibles",
    title: "test",
    content: "test",
    show: true
    
  }

axios({
    url: "http://localhost:4000/graphql",
    method: 'post',
    data: {
        query: `
        mutation($post : inputPost!){
            addPost(input: $post
            )
            {
              _id
              author
              title
              content
              show
            }
          }
    `,
    variables : JSON.stringify({post})}
}).then(res => {
    console.log(res.data.data);
}).catch(function (error) {
    console.log('Error ' + error.message)
});