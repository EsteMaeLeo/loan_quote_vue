<script setup>
//v-on:input="handleChange"
import { ref, reactive } from "vue";
import Header from "./components/Header.vue";

const quantity = ref(10000);

const MIN = 0;
const MAX = 20000;
const STEP = 100;

const state = reactive({
  quantity: 0,
});

/*function handleChange(e) {
  quantity.value = Number(e.target.value);
  state.quantity = Number(e.target.value);
} 
from the imput
      value="10000"
      @input="handleChange"
*/

console.log(quantity.value);
console.log(state.quantity);
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />
    <div className="flex justify-between my-6">
      <Button operator="-" fn="{handleClickMinus}" />
      <Button operator="+" fn="{handleClickAdd}" />
    </div>
    <input
      type="range"
      className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-700"
      :min="MIN"
      :max="MAX"
      :step="STEP"
      v-model.number="quantity"
    />
    <p>$ {{ quantity }}</p>
  </div>
</template>

<style scoped></style>
