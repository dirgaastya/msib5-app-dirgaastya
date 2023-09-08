<script setup lang="ts">
import { onMounted } from "vue";
import { useTodoStore } from "../store/todo.store";
import Input from "../components/Input.vue";
import FilterButton from "../components/FilterButton.vue";
import Card from "../components/Card.vue";
import Loading from "../components/Loading.vue";

const todoStore = useTodoStore();

onMounted(() => {
    todoStore.fetchTodos();
});
</script>

<template>
    <div class="px-3">
        <div class="py-8">
            <h1 class="text-5xl font-thin text-center">TODOS</h1>
        </div>
        <Input @keyup.enter="todoStore.addTodo" v-model="todoStore.title" />
        <div class="py-3 flex items-center justify-between font-light">
            <p class="text-base">{{ todoStore.activeTodosCount }} items left</p>
            <div class="flex items-center gap-x-3">
                <FilterButton @click="todoStore.filterAll" :className="todoStore.filterMode === 'all'" label="All" />
                <FilterButton
                    @click="todoStore.filterActiveTodos"
                    :className="todoStore.filterMode === 'active'"
                    label="Active"
                />
                <FilterButton
                    @click="todoStore.filterCompletedTodos"
                    :className="todoStore.filterMode === 'completed'"
                    label="Completed"
                />
            </div>
            <button class="text-base" @click="todoStore.clearCompletedTodos">
                Clear Completed
            </button>
        </div>
        <div v-for="todo in todoStore.filterTodos" :key="todo.id">
            <Card :todo="todo" :updateTodoCompleted="todoStore.updateTodoCompleted" :deleteTodo="todoStore.deleteTodo" />
        </div>
        <Loading v-show="todoStore.isLoading" />
    </div>
</template>
