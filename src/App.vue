<script setup>
//v-on:input="handleChange"
import { ref, computed, reactive } from "vue";
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

const formatMoney = computed(() => {
  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(quantity.value);
});

console.log(quantity.value);
console.log(state.quantity);
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />
    <div className="flex justify-between mt-10">
      <Button
        class="h-10 w-10 flex items-center justify-center font-bold bg-lime-600 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 text-white text-2xl"
        >-</Button
      >
    </div>
    <input
      type="range"
      className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-700"
      :min="MIN"
      :max="MAX"
      :step="STEP"
      v-model.number="quantity"
    />
    <p class="text-center my-10 text-5xl font-extrabold text-indigo-700">
      {{ formatMoney }}
    </p>
  </div>
</template>

<style scoped></style>
