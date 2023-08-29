<script setup lang="ts">
import { ref,onMounted, watch } from "vue";
import axios from 'axios'
import Button from '../components/Button.vue'

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

const todos = ref<Todo[]>([]);
const filteredTodos = ref<Todo[]>([])
const title = ref<String>('')

const getTodoList = async () :Promise<void> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    todos.value = response.data
    filteredTodos.value =response.data
}

const postTodo = async ():Promise<void> =>{
    if(title.value !== ""){
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos",{
        userId: 1,
        title: title.value,
        completed: false
    })
    title.value = ""
    todos.value.unshift(response.data)
    }else{
        window.alert('Please fill title!');
    }

}

const updateTodo = async (id:number):Promise<void> => {
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        completed: true
    })
}

const deleteTodo = async (id:number):Promise<void> => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    filteredTodos.value = filteredTodos.value.filter(todo => todo.id !== id);
}

const filterAll = ():void => {
    filteredTodos.value = todos.value
}
const filterActive = ():void => {
    filteredTodos.value = todos.value.filter((todo)=>todo.completed!==true)
}
const filterCompleted = ():void => {
    filteredTodos.value = todos.value.filter((todo)=>todo.completed===true)
}
const clearCompleted = ():void => {
    todos.value = todos.value.filter((todo)=>todo.completed!==true)
}

function getTodosLength():number {
    const todo = todos.value.filter(todo=>todo.completed !== true)
    return todo.length
}

onMounted(()=>{
    getTodoList()
})
watch(todos,()=>{
    filteredTodos.value = todos.value
})
</script>

<template>
    <div class="px-3">
        <div class="py-8">
            <h1 class="text-5xl font-thin text-center">TODOS</h1>
        </div>
        <div>
            <input type="text" @keyup.enter="postTodo" v-model="title" placeholder="What needs to be done" class="w-full h-12 px-3 rounded-md shadow-md">
        </div>
        <div class="py-3 flex items-center justify-between font-light">
            <p>{{ getTodosLength() }} items left</p>
            <div class="flex items-center gap-x-3">
                <Button @click="filterAll" label="All" />
                <Button @click="filterActive" label="Active" />
                <Button @click="filterCompleted" label="Completed" />
            </div>
            <button class="text-base" @click="clearCompleted">
                Clear Completed
            </button>
        </div>
        <div v-for="todo in filteredTodos" :key="todo.id" class="w-full p-3 mb-3 bg-zinc-700 flex items-center justify-between rounded-md shadow-md">
    <div class="flex items-center gap-x-3">
        <input @change="updateTodo(todo.id)" type="checkbox" v-model="todo.completed">
        <p :class="`text-base leading-relaxed tracking-tight ${ todo.completed ? 'line-through': ''}`">{{ todo.title }}</p>
    </div>
    <button @click="deleteTodo(todo.id)" class="text-base text-red-600 cursor-pointer">Delete</button>
</div>
    </div>
</template>
