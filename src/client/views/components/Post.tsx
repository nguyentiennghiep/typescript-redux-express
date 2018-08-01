import * as React from 'react';


class Post extends React.Component<any, any> {
    onClick = () =>{
        console.log(this.props.post._id);
    }
    render() {
        return <div>
            <div className="card item">
                <div className="card-header">
                    Author: {this.props.post.author}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{this.props.post.title}</h3>
                    <p className="card-text">{this.props.post.content}</p>
                    <a className="btn btn-danger text-color" onClick = {this.onClick}>Delete</a>
                    <a className="btn btn-primary ml-10 text-color">Go somewhere</a>
                </div>
            </div>
        </div>

    }
}
export default Post;