<template>
  <ul v-if="expand || times.length <= 4" class="tour__times">
    <li v-for="(time, index) in times" :key="index" class="tour__time">
      {{ time }}
    </li>
  </ul>
  <ul v-else class="tour__times">
    <li
      v-for="(time, index) in times.slice(0, 3)"
      :key="index"
      class="tour__time"
    >
      {{ time }}
    </li>
    <li @click="expand = true" class="tour__time">ещё...</li>
  </ul>
</template>

<script>
export default {
  props: {
    times: Array,
  },
  data() {
    return {
      expand: false,
    };
  },
};
</script>

<style>
.tour__times {
  list-style: none;
  margin-left: 36px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
  row-gap: 8px;
  color: #343434;
  font-size: 14px;
  line-height: 20px;
}

.tour__time {
  background-color: #d9e8ff;
  border-radius: 11px;
  padding: 2px 13px;
  cursor: pointer;
}

@media screen and (min-width: 800px) {
  .tour__times {
    margin: 0;
    column-gap: 6px;
  }

  .tour__time {
    font-size: 16px;
    padding: 4px 15px;
  }
}
</style>
