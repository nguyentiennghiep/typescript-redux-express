import * as React from 'react';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';


class Post extends React.Component<any, any> {
    onClick = () => {
        if (confirm('Do you really want to delete this Post?')) //eslint-disable-line
        {
            this.props.onDeletePost(this.props.post._id);
        }
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
                    <a className="btn btn-primary ml-10 text-color">Go somewhere</a>
                    <a className="btn btn-danger text-color" onClick={this.onClick}>Delete</a>
                </div>
            </div>
        </div>

    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        onDeletePost: (id: String) => {
            dispatch(actions.deletePostDB(id))
        }
    }
}
export default connect(null, mapDispatchToProps)(Post);