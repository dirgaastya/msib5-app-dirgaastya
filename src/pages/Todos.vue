<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTodoStore } from "../store/todo.store";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";

const todoStore = useTodoStore();
const title = ref("");

const addTodo = () => {
    todoStore.addTodo(title.value);
    title.value = "";
};

onMounted(() => {
    todoStore.fetchTodos();
});
</script>

<template>
    <digv class="px-3">
        <div class="py-8">
            <h1 class="text-5xl font-thin text-center">TODOS</h1>
        </div>
        <Input @keyup.enter="addTodo" v-model="title" />
        <div class="py-3 flex items-center justify-between font-light">
            <p class="text-base">{{ todoStore.activeTodosCount }} items left</p>
            <div class="flex items-center gap-x-3">
                <Button @click="todoStore.filterAll" label="All" />
                <Button @click="todoStore.filterActiveTodos" label="Active" />
                <Button @click="todoStore.filterCompletedTodos" label="Completed" />
            </div>
            <button class="text-base" @click="todoStore.clearCompletedTodos">
                Clear Completed
            </button>
        </div>
        <div v-for="todo in todoStore.filterTodos" :key="todo.id">
            <Card :todo="todo" :updateTodoCompleted="todoStore.updateTodoCompleted" :deleteTodo="todoStore.deleteTodo" />
        </div>
    </digv>
</template>
