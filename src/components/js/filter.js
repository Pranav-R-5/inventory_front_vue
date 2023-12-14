import { mapActions,mapState,mapWritableState } from "pinia";
import {useProductStore} from '../../stores/product_store'

export default{

    data(){
        return{
            selectedCategory: "",
            checkedcategories: [] ,
            selected:'',
            Brands: []
        }
    },
    watch:{
        Brands(newBrand,oldBrand){
            console.log(newBrand)
            alert("newBrand")
            console.log()
        },
        selectedCategory:{
            handler(category){
                this.filterprod(category);
                console.log("category--",category);
            }
        }
    },
    mounted(){
        this.copyProducts();
    },
    computed:{
        ...mapState(useProductStore,["categories"]),

    },
    methods:{
        ...mapActions(useProductStore,["copyProducts","filterprod","removefilters"])

    }

}