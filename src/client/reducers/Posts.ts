import * as types from '../constant/ActionTypes';
const Istate :any = null;
const PostsReducer = (state = Istate,action : any) =>{
    switch(action.type){
        case types.LIST_POST:{
            return action.postList;

        }
        default: return state;
    }
}
export default PostsReducer;