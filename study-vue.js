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
            const tel = this.tel;
            const isErr = tel.length<8 || isNaN(Number(tel));
            return isErr;
        }
    }
});