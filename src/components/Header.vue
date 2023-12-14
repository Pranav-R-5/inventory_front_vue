<template>
  <div class="headerflex">
    <div>
      <img class="logos" :src="logo" />
      <input
        ref="input" 
        @keyup.enter="search(msg)"
        type="text"
        size="40"
        style="padding-right: 30px"
        placeholder="Search.."
      />
      <button @click="$emit('alertmessage', title)">Search</button>
      <span>{{ title }}</span>
    </div>
    <div class="headerflex">
      <nav class="headerflex">
        <div class="buttons">
          <button @click="login(message)">Login</button>
          <button @click="allproduct">All products</button>
          <button @click="cart">
            Cart
            <sub>{{ cartList.length }}</sub>
        </button>

        </div>
      </nav>
    </div>
  </div>
</template>
<script src="./js/header-component.js"></script>
<style>
@import "@blibli/blue-design-tokens/dist/tokens-default.scss";
.logos {
  width: 110px;
  margin-bottom: -6px;
  padding: 0px 30px 0px 30px;
}
.headerflex {
  background-color: rgb(196, 235, 246);
  margin: 22px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.buttons{
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px; 
}
</style>
