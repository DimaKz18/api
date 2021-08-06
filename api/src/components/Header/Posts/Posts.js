import React from 'react'
import { Textarea } from '../../FormControls/FormControls'
import { Field, reduxForm, reset } from 'redux-form'
import Post from './Post'
import './Posts.css'

const Posts = (props) => {
    let postsElements = 
    props.posts.map( p => <Post title={p.title} 
        body={p.body} 
        key={p.id} 
        id={p.id}
        updatePost={props.updatePost}
        deletePost={props.deletePost}
        getComments={props.getComments}
        createComment={props.createComment}/>
    )
    let onAddPost = (values, dispatch) => {
        props.addPost(values.title, values.body);
        dispatch(reset('addPost'))
    }
    return(
        <div>
            {postsElements}
            <AddPostFormRedux onSubmit={onAddPost}/>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
      <form className='post-form' onSubmit={props.handleSubmit}>
        <div>
          <Field className='post-form-input' placeholder='Enter post title' name='title' component={Textarea} />
        </div>
        <div>
          <Field className='post-form-input' placeholder='Enter post body' name='body' component={Textarea} />
        </div>
        <div>
          <button className='post-form-btn'>Add Post</button>
        </div>
      </form>
    );
  };
  
const AddPostFormRedux = reduxForm ({form: 'addPost'})(AddPostForm);

export default Posts