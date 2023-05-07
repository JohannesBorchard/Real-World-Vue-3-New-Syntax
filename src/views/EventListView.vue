<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import EventService from '@/services/EventService.js' 

const events = ref(null)

onMounted(() => {
  //get events from mock db

  axios
    // alternative wär async/await
    // calls von mehreren components wren ineffizient -> besser service layer
    // .get('https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events')
      EventService.getEvents()
    // wait for response
    .then((response) => {
      events.value = response.data
    })
    // pseudo-fehler handling, in production komplexer
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
