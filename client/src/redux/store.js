import {
    configureStore
} from "@reduxjs/toolkit";

import authReducer
from "./authSlice";

import queueReducer
from "./queueSlice";

export const store =
    configureStore({

        reducer: {

            auth:
                authReducer,

            queue:
                queueReducer

        }

    });