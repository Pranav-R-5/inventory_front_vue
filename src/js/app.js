import elec1 from "@/assets/images/elec.jpeg";
import elec2 from "@/assets/images/electronic.jpeg";
import elec3 from "@/assets/images/headphones.jpeg";
import elec4 from "@/assets/images/oppo.jpeg";
import elec5 from "@/assets/images/printer.jpeg";
import elec6 from "@/assets/images/remote.jpeg";
import elec7 from "@/assets/images/iphone15.jpeg";
import headercomponet from "@/components/Header.vue";
import filtercomponent from "@/components/Filter.vue";
import productcomponent from "@/components/Products.vue"
// import component file

export default {
  components: {
    headercomponet,
    filtercomponent,
    productcomponent
  },
  data() {
    return {

      
      // message:'Logging in...',
      // msg:'searching...',
      // logo:logo,
      // checkedcategories: [],
      // selected: "",
      // Brands: [],
      // products: [
      //   {
      //     img: elec7,
      //     name: "Ipone 15",
      //   },
      //   {
      //     img: elec6,
      //     name: "Remote",
      //   },
      //   {
      //     img: elec5,
      //     name: "Printer",
      //   },
      //   {
      //     img: elec4,
      //     name: "Oppo",
      //   },
      //   {
      //     img: elec3,
      //     name: "Headphones",
      //   },
      //   {
      //     img: elec2,
      //     name: "Audio Product",
      //   },
      //   {
      //     img: elec1,
      //     name: "Oven",
      //   },
      // ],
    };
  },
  methods:{
    login(message) {
      alert(this.message)
    },
    search(msg){
      alert(msg)
    }
  }
};
