<script>
import EventCard from "../components/EventCard.vue";
import EventService from "@/services/EventService.js";
import { watchEffect } from "vue";

export default {
  name: "TheHome",
  components: {
    EventCard,
  },
  props: ['page'],
  data() {
    return {
      events: null,
      totalEvents: 0,
    };
  },
  created() {
    watchEffect(() => {
    this.events = null;
    EventService.getEvents(2, this.page)
      .then((response) => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
      })
      .catch((error) => console.log(error));
    })
  },
  computed: {
    hasNextPage() {
      var totalPage = Math.ceil(this.totalEvents / 2)
      return this.page < totalPage
    }
  }
};
</script>

<template>
  <main>
    <div v-for="event in events" :key="event.id">
      <EventCard :event="event" />
    </div>
    <div class="pagination">
      <router-link
        :to="{name: 'EventList', query: {page: page - 1 }}"
        rel="prev"
        v-if="page != 1"
      >Prev page
      </router-link>
      <router-link
        :to="{name: 'EventList', query: {page: page + 1 }}"
        rel="next"
        v-if="hasNextPage"
      >Next page
      </router-link>
    </div>
  </main>
</template>

<style>

.pagination {
  width: 250px;
  display: flex;
  justify-content: space-between;
}
.pagination span {
  cursor: pointer;
}
</style>
