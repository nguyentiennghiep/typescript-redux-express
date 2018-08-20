import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import axios from 'axios';

class AddPost extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            author: '',
            title: '',
            content: '',
            show: true,
            imgURL: '',
            img: null,
        };
    }

    onChange = (e: any) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value });
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        const post = {
            author: this.state.author,
            title: this.state.title,
            content: this.state.content,
            show: this.state.show,
            imgURL: this.state.imgURL
        };
        this.props.addNewPost(post);
        this.props.history.push('/');
    }

    onUpLoad = (e: any) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('image', this.state.img, this.state.img.name);
        axios.post('http://localhost:4000/upload', fd)
            .then(res => {
                this.setState({ imgURL: res.data.data });
            });
    }

    onImage = (e: any) => {
        e.preventDefault();
        this.setState({ img: e.target.files[0] });
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
                                <input type="text" className="form-control" name="author" onChange={this.onChange} value={this.state.author} />
                                <label>Title :</label>
                                <input type="text" className="form-control" name="title" onChange={this.onChange} value={this.state.title} />
                                <label>Content :</label>
                                <textarea className="form-control tw" name="content" onChange={this.onChange} value={this.state.content}></textarea>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="show" value="checkedValue" checked={this.state.show} onChange={this.onChange} />
                                        Show
                            </label>

                                </div>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </form>
                        </div>
                    </div>
                    <form onSubmit={this.onUpLoad} >
                        <div className="form-group">
                            <label ></label>
                            <input type="file" className="form-control-file" name="image" placeholder="" onChange={this.onImage} />
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                    <img src={`http://localhost:4000/${this.state.imgURL}`} alt="" />
                </div>
            </div>
        </div>;

    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        addNewPost: (post: any) => {
            dispatch(actions.addPostDB(post));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddPost);