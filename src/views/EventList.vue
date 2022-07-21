<script>
import EventCard from "../components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "TheHome",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => (this.events = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<template>
  <main>
    <div v-for="event in events" :key="event.id">
      <EventCard :event="event" />
    </div>
  </main>
</template>
