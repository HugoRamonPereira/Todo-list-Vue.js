<template>
  <div class="todo-items-info">
    <div class="items-left">{{ countLength }} items left</div>
    <div class="item-status">
      <span
        :class="{
          active: allListClass,
        }"
        @click="() => emit('all')"
        >All</span
      >
      <span
        :class="{
          active: allActiveClass,
        }"
        @click="() => emit('allActive')"
        >Active</span
      >
      <span
        :class="{
          active: allCompletedClass,
        }"
        @click="() => emit('allCompleted')"
        >Completed</span
      >
    </div>
    <div class="items-clear">
      <span
        :class="{
          active: clearCompletedClass,
        }"
        @click="() => emit('cleaCompleted')"
        >Clear Completed</span
      >
    </div>
  </div>
</template>
<script>
export default {
  emits: ["cleaCompleted", "allCompleted", "allActive", "all"],
  props: {
    allListClass: { type: Boolean, default: false },
    allActiveClass: { type: Boolean, default: false },
    allCompletedClass: { type: Boolean, default: false },
    clearCompletedClass: { type: Boolean, default: false },
    countLength: { type: Number, default: 0 },
  },
  setup(_, { emit }) {
    return { emit };
  },
};
</script>
