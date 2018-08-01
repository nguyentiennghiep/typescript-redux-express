import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';


class AddPost extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            author : '',
            title: '',
            content:'',
            show : true
        };
    }

    onChange = (e : any) =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value });
    }

    onSubmit = (e :any) =>{
        e.preventDefault();
        this.props.addNewPost(this.state);
    }
    
    render() {
        return <div>
            <div className="content mt-10">
                <div className="container mt-10">
                    <div className="card">
                        <div className="card-header">
                            Add a Post  </div>
                        <div className="card-body">
                            <form className="form-group" onSubmit={this.onSubmit}>
                                <label>Author Name :</label>
                                <input type="text" className="form-control" name="author" onChange = {this.onChange} value = {this.state.author} />
                                <label>Title :</label>
                                <input type="text" className="form-control" name="title" onChange = {this.onChange} value = {this.state.title} />
                                <label>Content :</label>
                                <textarea className="form-control" name="content" onChange = {this.onChange} value = {this.state.content}></textarea>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="show" value="checkedValue" checked = {this.state.show} onChange = {this.onChange}/>
                                        Show
                            </label>
                        
                                </div>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        addNewPost: (post:any) => {
            dispatch(actions.addPostDB(post))
        }
    }
};

export default connect(null,mapDispatchToProps)(AddPost);