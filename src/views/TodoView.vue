<template>
  <main class="app">
    <HeaderComponent
      :changeColorValue="state.changeColorValue"
      @changeColorTheme="changeColorTheme"
    />
    <InputCreateComponent @addTodo="addTodo" />

    <section class="todo-list">
      <TableComponent
        @removedTodo="removedTodo"
        @checkedTodo="checkedTodo"
        :todos="state.todos"
      />
      <ItemInforComponent
        :allCompletedClass="state.allCompletedClass"
        :allListClass="state.allListClass"
        :clearCompletedClass="state.clearCompletedClass"
        :countLength="state.todos.length"
        @all="all"
        @allActive="allActive"
        @allCompleted="allCompleted"
        @cleaCompleted="cleaCompleted"
      />
    </section>
  </main>
</template>

<script>
import { onMounted, computed, reactive } from "vue";
import HeaderComponent from "@/components/header";
import InputCreateComponent from "@/components/inputCreate";
import ItemInforComponent from "@/components/itemInfo";
import TableComponent from "@/components/table";
import { getStorage, setStorage } from "@/services";
import { setCustomerTheme } from "@/utils/theme";
export default {
  components: {
    HeaderComponent,
    ItemInforComponent,
    InputCreateComponent,
    TableComponent,
  },
  setup() {
    const state = reactive({
      todos: [],
      allActiveClass: false,
      allListClass: false,
      allCompletedClass: false,
      clearCompletedClass: false,
      changeColorValue: false,
    });

    onMounted(() => {
      state.todos = getStorage();
      state.allListClass = true;
      setCustomerTheme(state.changeColorValue);
    });

    computed(() => {
      state.todos = todos.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
    });

    const changeColorTheme = () => {
      state.changeColorValue = !state.changeColorValue;
      setCustomerTheme(state.changeColorValue);
    };

    const all = () => {
      clearClass();
      state.allListClass = true;
      state.todos = getStorage();
    };

    const clearClass = () => {
      state.clearCompletedClass = false;
      state.allActiveClass = false;
      state.allCompleted = false;
      state.allListClass = false;
    };

    const allActive = () => {
      clearClass();
      state.allActiveClass = true;
      const all = getStorage();
      state.todos = all.filter((val) => !val.done);
    };

    const allCompleted = () => {
      clearClass();
      state.allCompleted = true;
      const all = getStorage();
      state.todos = all.filter((val) => val.done);
    };

    const addTodo = (input_content) => {
      if (!input_content.trim().length) {
        return;
      }

      state.todos.push({
        content: input_content,
        done: false,
        order: state.todos.length,
        createdAt: new Date().getTime(),
      });
      setStorage(state.todos);
    };

    const removedTodo = (todo) => {
      state.todos = state.todos.filter((t) => t != todo);
      setStorage(state.todos);
    };

    const checkedTodo = (todo) => {
      state.todos = state.todos.map((val) => {
        if (val === todo) todo.done = !todo.done;
        return val;
      });
      setStorage(state.todos);
    };

    const cleaCompleted = () => {
      clearClass();
      state.clearCompletedClass = true;
      const all = getStorage();
      state.todos = all.map((val) => {
        if (val.done) val.done = !val.done;
        return val;
      });
      setStorage(todos);
    };
    return {
      state,
      cleaCompleted,
      allActive,
      allCompleted,
      changeColorTheme,
      all,
      allActive,
      allCompleted,
      addTodo,
      removedTodo,
      checkedTodo,
    };
  },
};
</script>
<style></style>
