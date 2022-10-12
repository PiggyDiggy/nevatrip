<template>
  <ul class="tour__features">
    <li
      v-for="(feature, index) in tour.features"
      :key="index"
      class="tour__feature"
    >
      <div class="tour__feature-inner">
        <span>{{ feature }}</span>
        <TourTimes
          v-if="index === tour.features.length - 1"
          :times="tour.times"
        />
      </div>
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
  gap: 20px;
}

.tour__feature:last-child {
  align-items: flex-start;
}

.tour__feature-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tour__feature-inner span {
  margin-right: 5px;
}

.tour__feature::before {
  content: "";
  background: url("../assets/check-mark.svg");
  display: inline-block;
  width: 16px;
  height: 12px;
  flex-shrink: 0;
}

.tour__feature:last-child::before {
  margin-top: 6px;
}

@media screen and (min-width: 800px) {
  .tour__features {
    margin-top: 15px;
  }

  .tour__feature {
    font-size: 18px;
    color: #343434;
  }

  .tour__feature-inner {
    row-gap: 8px;
  }
}
</style>
