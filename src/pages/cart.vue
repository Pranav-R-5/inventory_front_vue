<template>
  <div class="products">
    <div>
      <h1 class="Title">My Cart:</h1>

      <button @click="clear_cart()" >Clear Cart</button>
    </div>
    <div>
      <div class="image-container">
        <div v-for="product in cartList" :Key="product">
          <div class="productcard">
          <img class="image" :src="product.img">
          <h5>{{ product.name }}</h5>
          <h5>Price:{{ product.price}}</h5>
          <h5>Ouantity:{{ product.quantity }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/Cart"></script>

<style>
h5{
    transition:font-size 1s;
    text-align: center;
}
.image-container {
  display: flex;
  width: 100%;
  overflow-x: scroll;
}
.Title {
  font-style: italic;
  align-items: center;
  padding-left: 3%;
}
.products {
  /* background-color:; */
  flex-direction: row;
  flex-grow: 1;
  overflow: auto;
}
.productcard{
    
    padding: 10px;
    border: 4px solid seashell;
}
.image{
    min-width:168px;    
    height: 168px;
    object-fit: cover;
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
