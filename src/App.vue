<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="username"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { UserMutations } from './store/user/mutations';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    username: {
      get(): string {
        return this.$store.state.user.username
      },
      set(value: string): void {
        this.$store.commit(UserMutations.SET_USERNAME, value)
      }
    },
    userInfo: {
      get(): string {
        return this.$store.getters.getUserInfo
      },
      set() {}
    }
  },
  mounted() {
    this.$store.dispatch('loadApiResult')
    setTimeout(() => {
      this.username = 'Tunmife'
    }, 3000);
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
