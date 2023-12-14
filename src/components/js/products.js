
import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductStore } from "../../stores/product_store";

export default {
  data() {
    return {};
  },

  methods: {
    showdetails(product) {
      alert(product.name + " price is: " + product.price);
    },
    decreamentquantity(product) {
      product.quantity--
    },
    increamentquantity(product) {
      product.quantity++
    },
    addToCart(product) {
      this.addcart(product);
    },
    ...mapActions(useProductStore, ["addcart"]),
  },
  computed: {
    ...mapState(useProductStore, ["productList","filterdproducts"]),
  },
};
