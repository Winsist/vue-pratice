export default{
    data(){
        return {
            age:18
        }
    },
    created(){
        console.log('mixin created');
    },
    methods:{
        showHobby(){
            this.flag=true;
        }
    }
}