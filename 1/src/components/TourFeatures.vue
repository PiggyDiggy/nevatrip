<template>
  <ul class="tour__features">
    <li
      v-for="(feature, index) in tour.features"
      :key="index"
      class="tour__feature"
    >
      {{ feature }}
      <TourTimes
        v-if="index === tour.features.length - 1"
        :times="tour.times"
      />
    </li>
  </ul>
</template>

<script>
import TourTimes from "./TourTimes.vue";

export default {
  props: {
    tour: Object,
  },
  components: {
    TourTimes,
  },
};
</script>

<style>
.tour__features {
  list-style: none;
  padding: 0;
  margin-block: 20px 0;
}

.tour__feature {
  display: flex;
  color: #4b4b4b;
  font-size: 14px;
  margin-block: 10px;
  align-items: center;
  column-gap: 20px;
  row-gap: 10px;
}

.tour__feature:last-child {
  margin: 0;
  flex-wrap: wrap;
}

.tour__feature::before {
  content: "";
  background: url("../assets/check-mark.svg");
  display: inline-block;
  width: 16px;
  height: 12px;
  flex-shrink: 0;
}

@media screen and (min-width: 800px) {
  .tour__features {
    margin-top: 15px;
  }
  
  .tour__feature {
    font-size: 18px;
    color: #343434;
  }
}
</style>
