<template>
<div>
  subcomponent-1

  <v-btn color="primary" @click="emitGlobalClickEvent">call event bus</v-btn>
</div>

</template>

<script>
import { EventBus } from '../../event-bus.ts';
export default {
     methods: {
    emitGlobalClickEvent() {
      var name='ashik'
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('i-got-clicked', name);
    }
  }

}
</script>

<style>

</style>