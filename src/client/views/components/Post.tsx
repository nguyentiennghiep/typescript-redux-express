import * as React from 'react';


class Post extends React.Component<any, any> {
    render() {
        return <div>
            <div className="card item">
                <div className="card-header">
                    Author: {this.props.post.author}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.post.title}</h5>
                    <p className="card-text">{this.props.post.content}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-primary ml-10">Go somewhere</a>
                </div>
            </div>
        </div>

    }
}
export default Post;