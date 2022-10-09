<template>
  <a :href="link" class="button">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
  }
}
</script>

<style>

.button {
  background-color: #fed74b;
  border: 0.5px solid #cba500;
  color: #404040;
  text-decoration: none;
  border-radius: 100vmax;
  padding: 12px 40px;
}

.tour.variation .button {
  border-radius: 10px;
}

.button:visited {
  color: #404040;
}

@media screen and (min-width: 800px) {
  .button {
    font-size: 18px;
    border: none;
    padding: 16px 42px;
  }

  .tour.variation .button {
    border-radius: 23px;
    padding: 16px 42px;
  }
}
</style>