<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js" />
     <v-card
    class="d-flex pa-2"
    outlined
    tile
  >
    <sub1></sub1>
    <sub2></sub2>
  </v-card>
    
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import sub1 from './subComponent1.vue'
import sub2 from './subComponent2.vue'

@Component({
  components: {
    HelloWorld,
    sub1,
    sub2
  }
})

export default class Home extends Vue {

   created() {
    } 
  destroyed() {
    }
}
</script>
