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
    } => ({
        todos: [],
        filterTodos: [],
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
            } catch (error) {
                console.error(error);
            }
        },
        async addTodo(title: string) {
            try {
                if (title !== '') {
                    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                        userId: 1,
                        title,
                        completed: false,
                    });
                    this.todos.unshift(response.data);
                    this.filterTodos = this.todos
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
                    completed: !status,
                });
            } catch (error) {
                console.error(error);
            }
        },
        async deleteTodo(id: number) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
                this.todos = this.todos.filter((todo) => todo.id !== id);
                this.filterTodos = this.todos
            } catch (error) {
                console.error(error);
            }
        },
        filterActiveTodos() {
            this.filterTodos = this.activeTodos
        },
        filterCompletedTodos() {
            this.filterTodos = this.completedTodos
        },
        filterAll() {
            this.filterTodos = this.todos
        },
        clearCompletedTodos() {
            this.todos = this.todos.filter(todo => !todo.completed)
            this.filterTodos = this.todos
        }
    },
})
