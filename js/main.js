var TodoComponent = Vue.extend({
    data: function(){
        return {
            inEditMode: false
        }
    },
    props: ['todo'],
    template: '<span><span v-on:click="clicked" >{{ todo.title }}</span><input v-on:keyup.enter="saved" v-model="todo.title" v-show="inEditMode" /> </span>',
    methods: {
        clicked: function(){
            this.inEditMode = true;
        },
        saved: function(){
            this.inEditMode = false;
        }
    }
});

Vue.component('todo-component', TodoComponent);

new Vue({
    el: '#app',
    data: {
        todoText: '',
        todos: [
            { title: 'Meeting' },
            { title: 'Shopping' },
            { title: 'Dinner' },

        ],
    },
    methods: {

        createTodo: function() {
            var todoText = this.todoText.trim();
            if(todoText){
                this.todos.push({ title:todoText });
                this.todoText = '';
            }
        },

        clearTodo: function () {
            console.log(index);
            this.todoText = '';
        },
        removeTodo: function (index) {
            console.log(index);
            this.todos.splice(index, 1);
        }
    }
});
