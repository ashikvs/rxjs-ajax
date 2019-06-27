<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>list of users</h3>
    <ul id="example-1">
  <li v-for="user in users">
    {{ user.name }}
  </li>
</ul>
  </div>
</template>
<script lang="ts">

export default  {

  props:['users'],

   created() {
    console.log('About-created',this.users)
    } ,
  destroyed() {
    console.log('About-destroyed')
    }
}
</script>