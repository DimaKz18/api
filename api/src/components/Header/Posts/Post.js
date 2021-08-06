import React, { useEffect, useState } from 'react'
import './Post.css'
let Post = (props) => {

    props.getComments(props.id)

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.title);  
    let [body, setBody] = useState(props.body);
    let [comment, setComment] = useState('')

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updatePost(props.id, title, body)
    }

    useEffect( () => {
        setTitle(props.title)
        setBody(props.body)
    }, [props.title, props.body, props.comments])

    const onTitleChange = (e) => {
        setTitle(e.currentTarget.value)
    }
    const onBodyChange = (e) => {
        setBody(e.currentTarget.value)
    }
    const onCommentChange = (e) => {
        setComment(e.currentTarget.value)
    }
    const onDeletePost = () => {
        props.deletePost(props.id)
    }
    const onAddComment = () => {
        props.createComment(props.id, comment)
        setComment('')
    }
    return (
        <div>
            {editMode ? 
                <div className='posts__input'>
                    <div>
                        <input className='posts__input-text' onChange={onTitleChange} autoFocus={true} value={title}></input>
                        <input className='posts__input-text' onChange={onBodyChange} autoFocus={true} value={body}></input>
                    </div>
                    <div className='posts__input__btn'>
                        <button className='btn-text bgcolor-blue' onClick={deactivateEditMode}>Save</button>
                    </div>
                </div> :
                <div className='wrapper'>
                    <div className='content'>
                        <div className='posts__content'>
                            <p className='posts__content-text'>Title: {props.title}</p>
                            <p className='posts__content-text'>Body: {props.body}</p>
                        </div>
                        <div className='content__btn'>
                            <button className='btn-text bgcolor-green' onClick={activateEditMode}>Change Post</button>
                            <button className='btn-text bgcolor-red' onClick={onDeletePost}>Delete Post</button>
                        </div>
                    </div>
                    <div className='comments'>
                        <p className='comments-text'>Comments: </p>
                        <input className='comments-input' onChange={onCommentChange} autoFocus={true} value={comment} placeholder='Write your comment'></input>
                        <div className='comments__btn'>
                            <button className='btn-text bgcolor-blue' onClick={onAddComment}>Add comment</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Post