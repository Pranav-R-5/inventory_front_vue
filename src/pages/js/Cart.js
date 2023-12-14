import { mapActions,mapState,mapWritableState } from "pinia";
import {useProductStore} from '../../stores/product_store'

export default{
    computed: {
        ...mapState(useProductStore,["cartList"])
    },
    watch:{
        isclear(){
            alert("hello")
        }
    },
    methods: {
        ...mapActions(useProductStore ,["clearcart"]),
        clear_cart(){
            this.clearcart()
        }
    }
}