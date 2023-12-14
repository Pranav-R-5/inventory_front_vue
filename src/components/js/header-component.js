import { mapActions,mapState,mapWritableState } from "pinia";
import {useProductStore} from '../../stores/product_store'
import logo from "@/assets/images/bliblilogo.jpeg"
export default{
    props:['title'],
    emit:['alertmessage'],
    data(){
        return{
            message:'Logging in...',
            msg:'searching...',
            logo:logo,
        }
    },
    

    mounted(){
      console.log(this.$refs.input)
      this.$refs.input.focus()
    },
    methods:{
        login(message) {
          alert(this.message)
        },
        search(msg){
          alert(this.msg)
        },
        cart(){
          this.$router.push("/cart");
        },
        allproduct(){
          this.$router.push("/")
        }
        
      },
      computed:{
        ...mapState(useProductStore,["cartList"])
      }
}