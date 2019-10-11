<template>
  <div>
  subcomponent-2
   <v-btn color="error" @click="stopListening">stop event bus</v-btn>
</div>
</template>

<script>
import { EventBus } from '../../event-bus.ts';
export default {
    mounted(){
        EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
});
    },
    methods:{
        stopListening(){
            EventBus.$off('i-got-clicked');
        }
    }

}
</script>

<style>

</style>