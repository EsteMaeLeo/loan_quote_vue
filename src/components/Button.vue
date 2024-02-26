<script setup>
//    const props = defineProps(['operator'])
const props = defineProps({
  operator: String,
  fn: Function,
});
console.log(props);
</script>

<template>
  <button
    type="button"
    class="h-10 w-10 flex items-center justify-center font-bold bg-lime-600 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 text-white text-2xl"
    @click="fn"
  >
    {{ operator }}
  </button>
</template>
