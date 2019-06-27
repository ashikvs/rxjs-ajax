<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about" >About</router-link>
    </div>
    <router-view :users="users"/>
  </div>
</template>

<script lang="js">
import getService from './apiService/getService.js'
import qs from "qs";
import { Observable } from "rxjs/Rx";
import { from, range, merge, concat, interval, of } from "rxjs";
import {
    map,
    tap,
    filter,
    flatMap,
    refCount,
    distinct,
    contains,
    catchError,
    pluck,
    publishReplay,
    retry,
    last,
    first,
    toArray,
    concatAll
} from "rxjs/operators";


export default {
  data() {
    return {
     baseUrl: process.env.VUE_APP_BASE_URL,
     users:[]
    }
  },


  created() {
      console.log('main-created');
      this.getData()
    },
    methods: {
    getData(){
      let popUpGroupList$ = getService.getHlmUsers(this.baseUrl)
                .subscribe(
                    next => {
                      debugger
                      this.users=next.response.hlm_users
                      console.log(next)
                    },
                    error => {
                      console.log(error)},
                    () => console.log("recieved hlm users")
                );
            
    }

      }
    
  }

</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
