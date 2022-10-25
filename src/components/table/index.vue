<template>
  <div v-for="todo in todos">
    <div
      :class="{
        done: todo.done,
      }"
      class="todo-item"
    >
      <div class="check">
        <div
          :class="{
            'check-mark checked': todo.done,
          }"
          class="check-mark"
          @click="() => emit('checkedTodo', todo)"
        >
          <img src="../../assets/icon-check.svg" alt="checked" />
        </div>
        <div class="todo-text">{{ todo.content }}</div>
      </div>

      <div class="actions">
        <button class="delete" @click="() => emit('removedTodo', todo)">
          <img src="../../assets/icon-cross.svg" alt="delete icon" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { todos: { type: Array, default: [] } },
  emits: ["checkedTodo", "removedTodo"],
  setup(_, { emit }) {
    return { emit };
  },
};
</script>
