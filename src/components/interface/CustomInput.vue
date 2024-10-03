<template>
   <div>
     <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
     <div class="mt-1">
       <input
         :type="type"
         class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
         :placeholder="placeholder"
         v-model="model"
         @input="$emit('update:modelValue', model)"
       />
     </div>
   </div>
 </template>
 
 <script setup>
 import { ref } from "vue";
 // eslint-disable-next-line no-unused-vars
 const props = defineProps({
   label: String,
   type: {
     type: String,
     required: true
   },
   placeholder: String
 });
 
 const model = ref();
 </script>
 