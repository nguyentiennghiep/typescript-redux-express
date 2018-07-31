import * as types from '../constant/ActionTypes';
import axios from 'axios';
export const listAll = (postList:any) => {
    return {
        type: types.LIST_POST,
        postList
    }
}

export const fetchData = () => {
    return (dispatch:any) => {
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
            dispatch(listAll(res.data.data.listPost))
        }).catch(function (error) {
            console.log('Error ' + error.message)
        });
    }
}