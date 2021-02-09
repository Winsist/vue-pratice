export default{
    data(){
        return{
            city:'杭州',
            b:'000'
        }
    },
    activated(){
        this.city='杭州';
        console.log('mixin')

    },
    methods:{
        sure(){
            this.b='222'
        }
    }
}