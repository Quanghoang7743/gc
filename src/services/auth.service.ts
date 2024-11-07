import {ILoginRequest} from "../interfaces";
import {createAsyncThunk} from "@reduxjs/toolkit";
import baseUrl from "../apis/axios.ts";

export const login = createAsyncThunk("/auth/login", async (data: ILoginRequest) => {
    try {
        const response = await baseUrl.post("/auth", data)
        if (response.status === 200) {
            return response.data
        }
    } catch (e) {
        console.log(e)
    }
})