const app = new Vue({
    el:'#app',
    data(){
        return{
            text:'hello vue!'
        };
    },
    methods:{
        handleClick(){
            this.text = 'button pushed'
        }
    }
});