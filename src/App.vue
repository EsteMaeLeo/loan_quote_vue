<script setup>
//v-on:input="handleChange"
import { ref, computed, reactive, watch } from "vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import { calTotalPay } from "./helpers";

const quantity = ref(10000);
const months = ref(6);
const totalAmount = ref(0);

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
const handleChangSub = () => {
  const value = quantity.value - STEP;
  if (value < MIN) {
    alert("Quantity not valid");
    return;
  }
  quantity.value = value;
};

const handleChangAdd = () => {
  const value = quantity.value + STEP;
  if (value > MAX) {
    alert("Quantity not valid");
    return;
  }
  quantity.value = value;
};

/* const formatMoney = computed(() => {
  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(quantity.value);
}); */
const formatMoney = (money) => {
  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(money);
};

watch([quantity, months], () => {
  //modify total
  totalAmount.value = calTotalPay(quantity.value, months.value);
});

const monthPay = computed(() => {
  return (totalAmount.value / months.value);
});

console.log(quantity.value);
console.log(state.quantity);
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />
    <div className="flex justify-between mt-10">
      <Button :operator="'-'" :fn="handleChangSub" />
      <Button :operator="'+'" :fn="handleChangAdd" />
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
      {{ formatMoney(quantity) }}
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

    <div v-if="totalAmount > 0" class="my-5 space-y-3 bg-gray-50 p-5">
      <h2 className="text-2xl font-extrabold text-gray-600 text-center">
        Payment <span className="text-indigo-700">Summary</span>
      </h2>

      <p className="text-xl text-gray-600 text-center font-bold">
        {{ months }} Months
      </p>
      <p className="text-xl text-gray-600 text-center font-bold">
        Total Ammount: {{ formatMoney(totalAmount) }}
      </p>
      <p className="text-xl text-gray-600 text-center font-bold">
        Month payment: {{ formatMoney(monthPay) }}
      </p>
    </div>
    <p v-else class="my-4 text-center font-extrabold text-gray-600">
      Add quantity and time
    </p>
  </div>
</template>

<style scoped></style>
