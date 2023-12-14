import { defineStore } from "pinia";
import elec1 from "@/assets/images/elec.jpeg";
import elec2 from "@/assets/images/electronic.jpeg";
import elec3 from "@/assets/images/headphones.jpeg";
import elec4 from "@/assets/images/oppo.jpeg";
import elec5 from "@/assets/images/printer.jpeg";
import elec6 from "@/assets/images/remote.jpeg";
import elec7 from "@/assets/images/iphone15.jpeg";
import elec8 from "@/assets/images/cricket.jpeg";
import elec9 from "@/assets/images/football.jpeg";
import elec10 from "@/assets/images/jersey.jpeg";
import elec11 from "@/assets/images/shoe1.jpeg";
import elec12 from "@/assets/images/volleyball.jpeg";
import elec13 from "@/assets/images/basketball.jpeg";
import elec14 from "@/assets/images/batminton.jpeg";

export const useProductStore = defineStore("products", {
  state: () => ({
    cartList: [],
    categories:["electronics","sports"],
    filterdproducts:[],
    productList: [
      {
        img: elec7,
        name: "Ipone 15",
        price: "$60000",
        quantity: 1,
        category:"electronics"
      },
      {
        img: elec6,
        name: "Remote",
        price: "$60",
        quantity: 1,
        category:"electronics"
      },
      {
        img: elec13,
        name: "Basketball",
        price: "$900",
        quantity: 1,
        category:"sports"
      },
      {
        img: elec14,
        name: "Batminton",
        price: "$100",
        quantity: 1,
        category:"sports"
      },
      {
        img: elec5,
        name: "Printer",
        price: "$600",
        quantity: 1,
        category:"electronics"
      },
      {
        img: elec4,
        name: "Oppo",
        price: "$2000",
        quantity: 1,
        category:"electronics"
      },
      {
        img: elec1,
        name: "Oven",
        price: "$100",
        quantity: 1,
        category:"electronics"
      },
      {
        img: elec8,
        name: "Cricket-Kit",
        price: "$500",
        quantity: 1,
        category:"sports"
      },
      {
        img: elec9,
        name: "Football",
        price: "$90",
        quantity: 1,
        category:"sports"
      },
      {
        img: elec3,
        name: "Headphones",
        price: "$20",
        quantity: 1,
        category:"electronics"
      },
      {
        img: elec2,
        name: "Audio Product",
        price: "$900",
        quantity: 1,
        category:"electronics"
      },
      {
        img: elec10,
        name: "jersey",
        price: "$140",
        quantity: 1,
        category:"sports"
      },
      {
        img: elec11,
        name: "Sports shoes",
        price: "$320",
        quantity: 1,
        category:"sports"
      },
      {
        img: elec12,
        name: "volleyball",
        price: "$20",
        quantity: 1,
        category:"sports"
      },
      {
        img: elec13,
        name: "Basketball",
        price: "$900",
        quantity: 1,
        category:"sports"
      },
      {
        img: elec14,
        name: "Batminton",
        price: "$100",
        quantity: 1,
        category:"electronics"
      },
    ],
    
  }),
  actions: {
    addcart(product) {
      this.cartList.push(product);
      console.log(this.cartList);
    },
    clearcart() {
      this.cartList = [];
    },
    filterprod(category){
        this.filterdproducts=this.productList.filter((product)=>product.category==category);
        console.log("this.filterdproducts:",this.filterdproducts);
        console.log("category",category);
    },
    copyProducts(){
        this.filterdproducts=this.productList
    },
    removefilters(){
        this.filterdproducts=this.productList;
    }
  },
});
