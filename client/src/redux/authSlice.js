import {
    createSlice
} from "@reduxjs/toolkit";

const savedUser =
    JSON.parse(
        localStorage.getItem("user")
    ) || null;

const savedToken =
    localStorage.getItem("token") || null;

const authSlice = createSlice({

    name: "auth",

    initialState: {

        user: savedUser,

        token: savedToken,

        isAuthenticated:
            !!savedToken

    },

    reducers: {

        loginSuccess:
            (state, action) => {

                state.user =
                    action.payload.user;

                state.token =
                    action.payload.token;

                state.isAuthenticated =
                    true;

                localStorage.setItem(
                    "token",
                    action.payload.token
                );

                localStorage.setItem(
                    "user",
                    JSON.stringify(
                        action.payload.user
                    )
                );

            },

        logout:
            (state) => {

                state.user = null;

                state.token = null;

                state.isAuthenticated =
                    false;

                localStorage.removeItem(
                    "token"
                );

                localStorage.removeItem(
                    "user"
                );

            }

    }

});

export const {

    loginSuccess,

    logout

} = authSlice.actions;

export default authSlice.reducer;