<script setup lang="ts">
import { Ttodo } from "../store/todo.store";

defineProps<{
    todo: Ttodo;
    updateTodoCompleted: (id: number, completed: boolean) => void;
    deleteTodo: (id: number) => void;
}>();
</script>
<template>
    <div class="w-full p-3 mb-3 bg-zinc-700 flex items-center justify-between rounded-md shadow-md">
        <div class="flex items-center gap-x-3">
            <input @change="updateTodoCompleted(todo.id, todo.completed)" type="checkbox" v-model="todo.completed" />
            <p :class="`text-base leading-relaxed tracking-tight ${todo.completed ? 'line-through' : ''}`">{{ todo.title }}</p>
        </div>
        <button @click="deleteTodo(todo.id)" class="text-base text-red-600 cursor-pointer">Delete</button>
    </div>
</template>
