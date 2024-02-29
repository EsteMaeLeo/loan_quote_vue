<script setup>
//v-on:input="handleChange"
import { ref, computed, reactive } from "vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";

const quantity = ref(10000);
const months = ref(6)

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
const handleChangSub = () =>{
  const value = quantity.value - STEP;
  if(value < MIN ){
    alert('Quantity not valid')
    return
  }
  quantity.value = value;
}

const handleChangAdd = () =>{
  const value = quantity.value + STEP;
  if(value > MAX){
    alert('Quantity not valid')
    return
  }
  quantity.value = value;
}

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
        :operator="'-'"
        :fn="handleChangSub"
      />
      <Button 
        :operator="'+'"
        :fn="handleChangAdd"
      />
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
    
    <h2 class="text-2xl font-extrabold text-gray-600 text-center">
      Choose <span className="text-indigo-700">payment term</span>
    </h2>

    <select
    className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold 
    text-gray-600" 
      :value="months"
      v-model.number="months"
    >
    <option value="6">6 months</option>
    <option value="12">12 months</option>
    <option value="24">24 months</option>
  </select>

  <div class="my-5 space-y-3 "></div>
  </div>
</template>

<style scoped></style>
