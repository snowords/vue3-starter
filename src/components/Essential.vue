<script setup>
  import { ref } from 'vue'

  const msg = ref('Hello ')
  const items = ref([
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      address: 'New York',
    },
    {
      id: 2,
      name: 'Jim Doe',
      age: 42,
      address: 'London',
    },
    {
      id: 3,
      name: 'Joe Doe',
      age: 26,
      address: 'Sidney',
    },
  ])
</script>
<template>
  <div class="text-lg bold">循环渲染</div>  
  <li v-for="{ id, name, age, address } of items" :key="id">
    {{ msg }}, {{ name }} {{ age }} {{ address }}
  </li>
</template>