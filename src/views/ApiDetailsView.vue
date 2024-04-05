<template>
  <div class="card m-2">
    <div class="card-header">{{ product.title }}</div>
    <div class="card-body">
      <img :src="product.thumbnail" :alt="product.title"/>
      <p><b>писание товара:</b><br /> {{ product.description }}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <div class="fw-bold fst-italic">Цена: ${{ product.price }}</div>
      <div class=""><RouterLink class="btn btn-dark" to="/api">Назад</RouterLink></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 500px;
}
.card img {
  width: 450px;
  margin: 0 auto;
}
</style>

<script>
 export default {
   //Переменные
   data() {
     return {
       product: null,
     }
   },
   //Метод выполняется после добавления компонента в DOM
   created() {
     const id = this.$route.params.id
     const url = "https://dummyjson.com/products/" + id;
     fetch(url)
         .then(response => response.json())
         .then(data => this.product = data)
   }
 }
</script>