import * as React from 'react';
import Post from './Post';

class PostList extends React.Component {
    render() {
        return <div>
            <div className="content mt-10">
                <div className="container">
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>

    }
}
export default PostList;