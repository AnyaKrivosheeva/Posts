import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsAPI } from "../../api/postsAPI";


const initialState = {
    posts: {
        posts: null,
        loading: false,
    },
    postForView: {
        post: null,
        loading: false,
    },
    latestPosts: {
        posts: null,
        loading: false,
    },
};

export const getPostById = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        return await postsAPI.fetchById(postId);
    }
);

export const getLatestPosts = createAsyncThunk(
    'posts/fetchLatestPosts',
    async (limit) => {
        return await postsAPI.fetchLatestPosts(limit);
    }
);

export const getPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        return await postsAPI.fetchPosts();
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPost(state, action) {
            // edit post
        },
        addPost(state, action) {
            const newPost = { ...action.payload };
            newPost.id = new Date().getTime();
            state.posts.posts = state.posts.posts ? [newPost, [...state.posts.posts]] : [newPost];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostById.pending, (state) => {
                state.postForView = {
                    post: null,
                    loading: true,
                }
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.postForView = {
                    post: action.payload,
                    loading: false,
                }
            })
        builder
            .addCase(getPosts.pending, (state) => {
                state.posts = {
                    posts: null,
                    loading: true,
                }
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = {
                    posts: action.payload,
                    loading: false,
                }
            })
        builder
            .addCase(getLatestPosts.pending, (state) => {
                state.latestPosts = {
                    posts: null,
                    loading: true,
                }
            })
            .addCase(getLatestPosts.fulfilled, (state, action) => {
                state.latestPosts = {
                    posts: action.payload,
                    loading: false,
                }
            })
    },
});


export const { editPost, addPost } = postsSlice.actions;
export default postsSlice.reducer;

