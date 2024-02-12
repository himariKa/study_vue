const app = new Vue({
    el: '#app',
    data() {
        return {
            name:'name',
            email:'email',
            tel:'00'
        };
    },
    computed:{
        isInvalidName(){
            return this.name.length<4;
        },
        isInvalidEmail(){
            return this.email.length<8;
        },
        isInvalidTel(){
            return this.tel.length<8;
        }
    }
});