import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            id: 1,
            title: 'Post 1',
            image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem vitae sapiente accusantium, dolorum provident tempore rerum ex neque aspernatur?',
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem vitae sapiente accusantium, dolorum provident tempore rerum ex neque aspernatur?',
        },
        {
            id: 3,
            title: 'Post 3',
            image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem vitae sapiente accusantium, dolorum provident tempore rerum ex neque aspernatur?',
        },
        {
            id: 4,
            title: 'Post 4',
            image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem vitae sapiente accusantium, dolorum provident tempore rerum ex neque aspernatur?',
        },
        {
            id: 5,
            title: 'Post 5',
            image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem vitae sapiente accusantium, dolorum provident tempore rerum ex neque aspernatur?',
        },
    ],
    postForView: null,
    latestPosts: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        editPost(state, action) {
            // edit post
        },
        getPost(state, action) {
            state.postForView = state.posts.find((post) => post.id === action.payload);
        },
        getLatestPosts(state) {
            state.latestPosts = state.posts.slice(2, 5);
        },
        addPost(state, action) {
            // add new post by data
        },
    },
});


export const { setPosts, editPost, getPost, getLatestPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;

