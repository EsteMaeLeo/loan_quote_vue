<script setup>
//v-on:input="handleChange"
import { ref, reactive } from "vue";
import Header from "./components/Header.vue";

const quantity = ref(0);

const state = reactive({
  quantity: 0,
});

function handleChange(e) {
  quantity.value = e.target.value;
}

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
      @input="handleChange"
    />
    {{ quantity }}
  </div>
</template>

<style scoped></style>
