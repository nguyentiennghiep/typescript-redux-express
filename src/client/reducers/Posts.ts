import * as types from '../constant/ActionTypes';
const Istate :any = null;
const PostsReducer = (state = Istate,action : any) =>{
    switch(action.type){
        case types.LIST_POST:{
            return action.postList;

        }
        case types.ADD_POST:{
           state.push(action.post);
            return state;
        }
        default: return state;
    }
}
export default PostsReducer;