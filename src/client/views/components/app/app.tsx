import * as React from 'react';
import Menu from '../Menu';
import PostList from '../PostList';
import AddPost from '../AddPost';
import NotFoundPage from '../NotFound';

import { Switch, Route } from 'react-router-dom';

const routes = [
    {
        path: "/",
        exact: true,
        component: PostList
    },
    {
        path: "/add",
        exact: false,
        component: AddPost
    },
    {
        path: '',
        exact: false,
        component : NotFoundPage
    }
];


class App extends React.Component {
    showContent = (routes: any) => {
        var result = '';
        if (routes.length > 0) {
            result = routes.map((route: any, index: any) => {
                return <Route key={index} path={route.path} exact={route.exact} component={route.component} />
            })
        }
        return <Switch>{result}</Switch>;
    }
    render() {
        return <div>
            <Menu />
            {this.showContent(routes)}
        </div>

    }
}
export default App;