import * as types from '../constant/ActionTypes';
import axios from 'axios';
import URL from '../../config/apiURL'
export const listAll = (postList: any) => {
    return {
        type: types.LIST_POST,
        postList
    }
}

export const fetchData = () => {
    return (dispatch: any) => {
        axios({
            url: URL,
            method: 'post',
            data: {
                query: `
                query{
                    listPost{
                    _id
                    author
                    title
                    content
                    show
                    }
                }
            `}
        }).then(res => {
            dispatch(listAll(res.data.data.listPost))
        }).catch(function (error) {
            console.log('Error ' + error.message)
        });
    }
};


export const addNewPost = (post: any) => {
    return {
        type: types.ADD_POST,
        post
    }
}

export const addPostDB = (post: any) => {
    return (dispatch: any) => {
        axios({
            url: URL,
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
            dispatch(addNewPost(res.data.data.addPost))
        }).catch(function (error) {
            console.log('Error :' + error.message)
        });
    }
};

export const deletePost = (id : String) =>{
    return {
        type : types.DELETE_POST,
        id
    }
}

export const deletePostDB = (id: String) => {
    return (dispatch: any) => {
        axios({
            url: URL,
            method: 'post',
            data: {
                query: `
                mutation($id : String!){
                    addPost(id: $id
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
            variables : JSON.stringify({id})}
        }).then(res => {
            dispatch(deletePost(res.data.data._id))
        }).catch(function (error) {
            console.log('Error :' + error.message)
        });
    }
};