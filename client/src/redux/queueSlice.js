import {
    createSlice
} from "@reduxjs/toolkit";

const queueSlice = createSlice({

    name: "queue",

    initialState: {

        tokens: [],

        currentToken: null,

        loading: false

    },

    reducers: {

        setTokens:
            (state, action) => {

                state.tokens =
                    action.payload;

            },

        setCurrentToken:
            (state, action) => {

                state.currentToken =
                    action.payload;

            },

        setLoading:
            (state, action) => {

                state.loading =
                    action.payload;

            }

    }

});

export const {

    setTokens,

    setCurrentToken,

    setLoading

} = queueSlice.actions;

export default queueSlice.reducer;