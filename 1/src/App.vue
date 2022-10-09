<template>
  <section class="tours">
    <Tour v-for="(tour, index) in tours" :key="index" :tour="tour"></Tour>
  </section>
</template>

<script>
import Tour from "@/components/Tour.vue";

export default {
  name: "App",
  components: {
    Tour,
  },
  data() {
    return {
      tours: [
        {
          title:
            "АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019",
          image: "tour-1.jpg",
          duration: "2 часа",
          features: [
            "Билет на целый день",
            "Неограниченное число катаний",
            "6 остановок у главных достопримечательностей",
            "Ближайший рейс сегодня",
          ],
          times: ["12:00", "12:00", "12:00", "12:00"],
          badge: "Новинка",
          price: "900",
          additionalPrice: "1200 р на причале",
          link: "#",
        },
        {
          title:
            "АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019",
          image: "tour-1.jpg",
          duration: "2 часа",
          features: [
            "Билет на целый день",
            "Неограниченное число катаний",
            "6 остановок у главных достопримечательностей",
            "Ближайший рейс сегодня",
          ],
          times: ["12:00", "12:00", "12:00", "12:00"],
          badge: "Новинка",
          price: "2900",
          additionalPrice: "1200 р на причале",
          link: "#",
          variation: true,
        },
        {
          title:
            "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
          image: "tour-3.jpg",
          duration: "2 часа",
          features: [
            "Билет на целый день",
            "Неограниченное число катаний",
            "6 остановок у главных достопримечательностей",
            "Ближайший рейс сегодня",
          ],
          times: ["12:00", "12:00", "12:00"],
          badge: "Новинка",
          price: "900",
          additionalPrice: "1200 р на причале",
          link: "#",
          variation: true,
        },
        {
          title:
            "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
          image: "tour-4.jpg",
          duration: "2 часа",
          features: [
            "Билет на целый день",
            "Неограниченное число катаний",
            "6 остановок у главных достопримечательностей",
            "Ближайший рейс сегодня",
          ],
          times: ["12:00", "12:00", "12:00", "12:00"],
          badge: "Круглый год",
          price: "900",
          additionalPrice: "1200 р на причале",
          link: "#",
        },
        {
          title:
            "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
          image: "tour-5.jpg",
          duration: "2 часа",
          features: [
            "Билет на целый день",
            "Неограниченное число катаний",
            "6 остановок у главных достопримечательностей",
            "Ближайший рейс сегодня",
          ],
          times: ["12:00", "12:00", "12:00", "12:00", "12:00", "12:00", "12:00", "12:00", "12:00"],
          price: "900",
          additionalPrice: "1200 р на причале",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}

.tours {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 26px 16px;
}

@media screen and (min-width: 800px) {
  .tours {
    padding-block: 65px;
  }
}
</style>
