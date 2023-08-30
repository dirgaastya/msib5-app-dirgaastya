import { defineStore } from 'pinia'
import axios from 'axios';

export type Ttodo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const useTodoStore = defineStore('todo', {
    state: (): {
        todos: Ttodo[],
        filterTodos: Ttodo[],
        title: string,
        filterMode: string,
        isLoading: boolean
    } => ({
        todos: [],
        filterTodos: [],
        title: "",
        filterMode: "all",
        isLoading: true
    }),
    getters: {
        completedTodos: (state) => state.todos.filter(todo => todo.completed),
        activeTodos: (state) => state.todos.filter(todo => !todo.completed),
        activeTodosCount: (state) => state.todos.filter(todo => !todo.completed).length,
    },
    actions: {
        async fetchTodos() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
                this.todos = response.data;
                this.filterTodos = response.data;
                this.isLoading = false
            } catch (error) {
                console.error(error);
            }
        },
        async addTodo() {
            try {
                if (this.title !== '') {
                    this.isLoading = true
                    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                        userId: 1,
                        title: this.title,
                        completed: false,
                    });
                    this.todos.unshift(response.data);
                    this.filterTodos = this.todos
                    this.title = ""
                    this.isLoading = false
                } else {
                    window.alert('Please fill title!');
                }
            } catch (error) {
                console.error(error);
            }
        },
        async updateTodoCompleted(id: number, status: boolean) {
            try {
                await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                    completed: status,
                });
            } catch (error) {
                console.error(error);
            }
        },
        async deleteTodo(id: number) {
            try {
                this.isLoading = true
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
                this.todos = this.todos.filter((todo) => todo.id !== id);
                this.filterTodos = this.todos
                this.isLoading = false
            } catch (error) {
                console.error(error);
            }
        },
        filterActiveTodos() {
            this.filterTodos = this.activeTodos
            this.filterMode = "active"
        },
        filterCompletedTodos() {
            this.filterTodos = this.completedTodos
            this.filterMode = "completed"
        },
        filterAll() {
            this.filterTodos = this.todos
            this.filterMode = "all"
        },
        clearCompletedTodos() {
            this.todos = this.todos.filter(todo => !todo.completed)
            this.filterTodos = this.todos
        }
    },
})
