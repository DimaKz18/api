import React from 'react'
import { connect } from 'react-redux';
import { getPostsThunk, addPostThunk, updatePostThunk, deletePostThunk, getCommentsThunk, createCommentThunk } from '../../redux/app-reducer'
import './Header.css'
import Posts from './Posts/Posts';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getPostsThunk()
    }
    render() {
        return (
            <div className='main-content'>
                <Posts posts={this.props.posts} 
                    comments={this.props.comments}
                    addPost={this.props.addPostThunk} 
                    updatePost={this.props.updatePostThunk} 
                    deletePost={this.props.deletePostThunk} 
                    getComments={this.props.getCommentsThunk}
                    createComment={this.props.createCommentThunk}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.app.posts,
        comments: state.app.comments
    }
}

 export default connect(mapStateToProps, {getPostsThunk, addPostThunk, updatePostThunk, deletePostThunk, getCommentsThunk, createCommentThunk})(HeaderContainer)