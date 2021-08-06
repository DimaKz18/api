import { appAPI } from "../api/api";

const SET_POSTS = 'APP/SET_POSTS';

let initialState = {
    posts: [
        //{id: 0, title: 'test', body: 'test', comments: [{postId: 0, body: 'test'}]}
    ],
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            };
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
       await appAPI.getComments(id)
    }
}

export const createCommentThunk = (postId, body) => {
    return async (dispatch) => {
        await appAPI.createComment(postId, body)
        dispatch(getCommentsThunk(postId))
    }
}
export default appReducer;