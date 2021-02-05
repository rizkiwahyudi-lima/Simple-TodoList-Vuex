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
    },

    // Menghapus Data Todo
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },

    // Memfilter Data Todo
    async filterTodos({ commit }, e) {
        // console.log(payload)
        // Get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit('setTodos', response.data);
    }
};

const mutations = {
    // menampilkan data
    setTodos: (state, todos) => (state.todos = todos),
    // unshift untuk push data
    newTodo: (state, todo) => state.todos.unshift(todo),
    // Menghapus data
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
};