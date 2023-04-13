import { StoreOptions, createStore } from 'vuex'
import { RootState } from './types'
import { user } from './user'

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: 'Hey from Vuex TSC'
  },
  modules: {
    user
  }
}

export default createStore<RootState>(store)
