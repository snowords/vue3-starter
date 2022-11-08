<script setup lang="ts">
import { runTsDemo } from '../utils/tsdemo'
// 引入失败
// import { name, getName, Animal, Directions, Options } from '/#/dec';

// console.log(name);
// let myName = getName();
// let cat = new Animal('Tom');
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// let options: Options = {
//     data: {
//         name: 'foo'
//     }
// };

const tsMsg = runTsDemo()

function sum(num: number) {
  // your code here
  const fn = (num2: number) => sum(num + num2);
  fn.valueOf = () => num;
  return fn;
}

const result = sum(1)
</script>
<template>
  <div class="w-1/2 h-screen m-auto h-full p-6 bg-gray-600 text-gray-100">
    ...
    <p>{{ tsMsg }}</p>
    <p>结果：</p>
    <p>{{ result(2)(3)(5).valueOf() }}</p>
  </div>
</template>