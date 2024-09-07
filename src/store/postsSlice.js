import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userPost : null
}

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        uploadPost: (state, action) => {
            state.userPost = action.payload.userPost;
        }
    }

})

export default postsSlice.reducer
export const { uploadPost } = postsSlice.actions;