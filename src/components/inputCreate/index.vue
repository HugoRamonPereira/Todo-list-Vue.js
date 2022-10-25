<template>
  <section class="create-todo">
    <input
      v-on:keyup.enter="addTodoComponent()"
      type="text"
      id="content"
      autocomplete="off"
      placeholder="Create new todo..."
      v-model="state.input_content"
    />
  </section>
</template>
<script>
import { reactive } from "vue";
export default {
  setup(_, { emit }) {
    const state = reactive({ input_content: "" });
    function addTodoComponent() {
      emit("addTodo", state.input_content);
      state.input_content = "";
    }

    return { addTodoComponent, state };
  },
};
</script>
