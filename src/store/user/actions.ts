import { ActionTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<UserState, RootState> = {
    loadApiResult({commit}): any {
        fetch('https://cat-fact.herokuapp.com/facts')
            .then(data => data.json())
            .then(data => {
                commit('SET_CAT_FACTS', data)
            })
    }
}