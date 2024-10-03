<script setup>
import MainContent from "./MainContent.vue";

import { useRoute } from "vue-router";
import { computed, ref, watchEffect } from "vue";

const route = useRoute();
const routeName = ref(route.name);
watchEffect(() => (routeName.value = route.name));
// eslint-disable-next-line
const loginRoute = computed(
   () => routeName.value === "Login" || routeName.value === "Daftar"
);
</script>
<template>
   <div class="w-full h-auto min-h-screen flex flex-col gap-0 bg-[#EDF0F2]">
      <main class="flex flex-col">
         <MainContent>
            <slot>
            </slot>
         </MainContent>
      </main>
   </div>
</template>
