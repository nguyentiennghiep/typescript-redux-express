import * as types from '../constant/ActionTypes';
const Istate: any = [];

const findIndex = (array: any, id: string) => {
    var result = -1;
    array.forEach((item:any, index:number) => {
        if (item._id === id) {
            result = index;
        }
    })

    return result;
}

const PostsReducer = (state = Istate, action: any) => {
    switch (action.type) {
        case types.LIST_POST: {
            return action.postList;

        }
        case types.ADD_POST: {
            state.push(action.post);
            return [...state];

        }
        case types.DELETE_POST: {
            console.log(action);
            var index = -1;
            index = findIndex(state, action.id);
            
            if (index != -1) {
                state.splice(index,1)
            }
            return [...state]
        }

        default: return state;
    }
}
export default PostsReducer;