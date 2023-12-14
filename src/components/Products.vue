<template>
  <div class="products">
    <div>
      <h1 style="font-style: italic">All Products:</h1>
      <section>
        <div class="image-container">
          <div v-for="product in filterdproducts" :key="product">
            <div class="productcard">
              <img class="image" :src="product.img" />
              <div>
                <h5>{{ product.name }}</h5>
              </div>
              <div>
                <h5>
                <button @click="decreamentquantity(product)">-</button>
                {{ product.quantity }}
                <button @click="increamentquantity(product)">+</button>
                </h5>
              </div>
              <div>
                <button @click="addToCart(product)">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script src="./js/products.js"></script>
<style scoped>
h5 {
  transition: font-size 1s;
  text-align: center;
}
h5:hover {
  color: rgb(138, 43, 226);
  font-size: 20px;
}
.bodypage {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.products {
  flex-direction: row;
}
.productcard {
  padding: 10px;
  border: 4px solid seashell;
}
.image {
  width: 198px;
  height:100px;
  object-fit: contain;
  margin-bottom: 10px;
  overflow-y: hidden;
}
.image-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
