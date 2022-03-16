<script setup>
import { runTsDemo } from '../utils/tsdemo'

const tsMsg = runTsDemo()

</script>
<template>
  <div class="w-1/2 h-screen m-auto h-full p-6 bg-gray-600 text-gray-100">
    ...
    <p>{{ tsMsg }}</p>
  </div>
</template>