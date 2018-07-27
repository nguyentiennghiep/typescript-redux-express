import * as React from 'react';
import Menu from '../Menu';
import PostList from '../PostList';


class App extends React.Component {
    render() {
        return <div>
            <Menu/>
            <PostList/>
        </div>

    }
}
export default App;