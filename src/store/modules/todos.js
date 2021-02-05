// Place for tag state, getter, actions and mutations
import axios from 'axios';

const state = {
    todos: [

    ]
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    // Menampilkan Data Todo
    async fetchTodos({ commit }) {
        // Memanggil API Todos
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
    },

    // Menambah Data Todo
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });
        commit('newTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    // unshift untuk push data
    newTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations
};