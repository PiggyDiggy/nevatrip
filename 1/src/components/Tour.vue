<template>
  <div class="tour" :class="{ variation: tour.variation }">
    <div class="tour__image-wrapper">
      <img
        class="tour__image"
        :src="require(`@/assets/${tour.image}`)"
        alt="Tour Image"
      />
      <div v-if="tour.badge" class="tour__image-badge">{{ tour.badge }}</div>
    </div>
    <div class="tour__info">
      <div class="tour__header">
        <div class="tour-duration">{{ tour.duration }}</div>
        <h3 class="tour__title">{{ tour.title }}</h3>
      </div>
      <TourFeatures :tour="tour" />
      <div class="tour__pricing">
        <div>
          <div class="tour__price">{{ tour.price }}</div>
          <div class="tour__additional-price">{{ tour.additionalPrice }}</div>
        </div>
        <Button :href="tour.link">Подробнее</Button>
      </div>
    </div>
  </div>
</template>

<script>
import TourFeatures from "./TourFeatures.vue";
import Button from "./Button.vue";

export default {
  components: {
    TourFeatures,
    Button,
  },
  props: {
    tour: Object,
  },
};
</script>

<style>
.tour {
  border: 0.3px solid #c9c9c9;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
}

.tour__image-wrapper {
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  position: relative;
}

.tour__image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.tour__image-badge {
  position: absolute;
  top: 40px;
  left: 0px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: #fed74b;
  color: #3e3e3e;
  font-size: 12px;
  line-height: 20px;
  padding: 8px 16px;
}

.tour.variation .tour__image-badge {
  top: 0;
  background-color: #7553ff;
  border-radius: 15px 0px 12px;
  color: #fff;
}

.tour__info {
  padding: 16px 12px;
  text-align: left;
}

.tour-duration {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #9e9e9e;
}

.tour-duration::before {
  content: "";
  background: url("../assets/clock.svg") no-repeat;
  background-size: 7px;
  background-position: 7px 1px;
  border: 2px solid #c7c7c7;
  border-radius: 100%;
  display: inline-block;
  height: 16px;
  width: 16px;
}

.tour__title {
  font-size: 14px;
  font-weight: 600;
  color: #404040;
}

.tour__pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 35px;
  padding-inline: 6px;
  line-height: 20px;
}

.tour__price {
  font-size: 20px;
  display: flex;
}

.tour__price::after {
  content: "₽";
  margin-left: 4px;
}

.tour__additional-price {
  font-size: 10px;
  line-height: 15px;
}

@media screen and (min-width: 800px) {
  .tour {
    flex-direction: row;
    border-radius: 15px;
  }

  .tour__info {
    padding: 16px 20px;
  }

  .tour__image-wrapper {
    border-radius: 15px 0 0 15px;
    flex-shrink: 0;
  }

  .tour__image {
    height: 100%;
    width: 370px;
  }

  .tour__image-badge {
    font-size: 16px;
    padding: 12px 35px;
  }

  .tour.variation .tour__image-badge {
    top: 50px;
    border-radius: 0;
    background-color: #099ce8;
  }

  .tour__header {
    display: flex;
    flex-direction: column-reverse;
  }

  .tour__title {
    margin-block: 0 15px;
    font-size: 26px;
    font-weight: 400;
    line-height: 34px;
    color: #000;
  }

  .tour-duration {
    font-size: 14px;
  }

  .tour__pricing {
    justify-content: flex-start;
    margin-top: 24px;
  }

  .tour__price {
    font-size: 36px;
    line-height: 30px;
  }

  .tour__additional-price {
    font-size: 14px;
    line-height: 20px;
    margin-top: 4px;
  }
  @media screen and (min-width: 1000px) {
    .tour__image {
      width: 470px;
    }
  }
}
</style>
