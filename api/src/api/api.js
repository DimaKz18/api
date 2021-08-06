import * as axios from "axios"

const instance = axios.create({
    baseURL: `https://bloggy-api.herokuapp.com/`,
    withCredentials: true,
})

export const appAPI = {
    getPosts() {
        return instance.get(`posts`).then(response => {
            return response.data
        })
    },
    createPost(title, body) {
        return instance.post(`posts`, {title, body}).then(response => {
            return response.data
        })
    },
    updatePost(id, title, body) {
        return instance.put(`posts/${id}`, {title, body}).then(response => {
            return response.data
        })
    },
    deletePost(id) {
        return instance.delete(`posts/${id}`).then(response => {
            return response.data
        })
    },
    getComments(id) {
        return instance.get(`posts/${id}?_embed=comments`).then(response => {
            return response.data
        })
    },
    createComment(postId, body) {
        return instance.post(`comments`, {postId, body}).then(response => {
            return response.data
        })
    },
}