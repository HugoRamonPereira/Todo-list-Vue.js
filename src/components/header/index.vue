<template>
  <section class="top-section">
    <div class="header">
      <img
        class="header-bg"
        src="../../assets/bg-desktop-dark.jpg"
        alt="background header"
      />
    </div>
    <div class="title-container">
      <h2 class="title">TODO</h2>
      <span class="sun-light-theme" @click="() => emit('changeColorTheme')">
        <img
          v-if="changeColorValue"
          src="../../assets/icon-sun.svg"
          alt="sun light theme"
        />
        <img v-else src="../../assets/icon-moon.svg" alt="moon dark theme" />
      </span>
    </div>
  </section>
</template>
<script>
export default {
  emits: ["changeColorTheme"],
  props: {
    changeColorValue: { type: Boolean, default: false },
  },
  setup(_, { emit }) {
    return { emit };
  },
};
</script>
