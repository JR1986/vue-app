<template>
  <main>
    <p>test</p>
    <p v-if="showExtra">show Extra</p>
  </main>
</template>

<script>
export default {
  props: ['showExtra']
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
