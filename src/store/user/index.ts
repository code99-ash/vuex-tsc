import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: UserState = {
    username: 'Ikhlas',
    email: 'oyetikh1@gmail.com',
    lastLogin: new Date()
}

export const user: Module<UserState, RootState> = {
    state,
    getters,
    mutations,
    actions
}