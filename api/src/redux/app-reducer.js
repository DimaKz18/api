import { appAPI } from "../api/api";

const SET_POSTS = 'APP/SET_POSTS';
const SET_COMMENTS = 'APP/SET_COMMENTS'
let initialState = {
    posts: [],
    comments: []
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            };
        }
        case SET_COMMENTS: {
            return {
                ...state,
                comments: action.comments,
            }
        }
        default:
            return state;
    }
}

const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    }
}
const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        comments
    }
}

export const getPostsThunk = () => {
    return async (dispatch) => {
        let data = await appAPI.getPosts()
        dispatch(setPosts(data))
    }
}

export const addPostThunk = (title, body) => {
    return async (dispatch) => {
        await appAPI.createPost(title, body)
        dispatch(getPostsThunk())
    }
}

export const updatePostThunk = (id, title, body) => {
    return async (dispatch) => {
        await appAPI.updatePost(id, title, body)
        dispatch(getPostsThunk())
    }
}

export const deletePostThunk = (id) => {
    return async (dispatch) => {
        await appAPI.deletePost(id)
        dispatch(getPostsThunk())
    }
}

export const getCommentsThunk = (id) => {
    return async (dispatch) => {
       let data = await appAPI.getComments(id)
       dispatch(setComments(data.comments))
    }
}

export const createCommentThunk = (postId, body) => {
    return async (dispatch) => {
        await appAPI.createComment(postId, body)
        dispatch(getCommentsThunk(postId))
    }
}
export default appReducer;