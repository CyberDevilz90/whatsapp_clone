<script setup>
import { ref, onMounted } from "vue";
import chatDataJson from "@/lib/chat.json";

const chatData = ref({ results: [] });

onMounted(() => {
   try {
      chatData.value = chatDataJson;
   } catch (error) {
      console.error("Failed to load chat data:", error);
   }
});
</script>

<template>
   <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside class="w-1/3 bg-white border-r border-gray-300">
         <div class="p-4">
            <h1 class="text-xl font-bold">Participants</h1>
            <ul class="mt-2">
               <li
                  v-for="participant in chatData.results[0]?.room.participant ||
                  []"
                  :key="participant.id"
                  class="flex items-center p-2 cursor-pointer hover:bg-gray-100"
               >
                  <div
                     class="flex items-center justify-center w-10 h-10 mr-2 text-white bg-gray-300 rounded-full"
                  >
                     {{ participant.name[0] }}
                     <!-- Menampilkan inisial peserta -->
                  </div>
                  <div>
                     <p class="font-medium">{{ participant.name }}</p>
                     <p class="text-sm text-gray-500">{{ participant.id }}</p>
                  </div>
               </li>
            </ul>
         </div>
      </aside>

      <!-- Area Chat -->
      <div class="flex-1 p-6">
         <div v-if="chatData.results.length > 0">
            <div class="flex flex-row items-center">
              <img
                 :src="chatData.results[0].room.image_url"
                 alt="Room Image"
                 class="object-cover w-16 h-16 mb-4 rounded-full shadow-md"
              />
               <h2 class="h-16 ml-5 text-2xl font-bold text-center">
                  {{ chatData.results[0].room.name }}
               </h2>
            </div>

            <h3 class="mb-2 text-lg font-semibold">Chat</h3>
            <div
               class="h-auto p-4 overflow-auto border border-gray-300 rounded-lg"
            >
               <div
                  v-for="comment in chatData.results[0].comments"
                  :key="comment.id"
                  class="mb-2"
               >
                  <strong class="font-semibold">{{ comment.sender }}:</strong>
                  <p class="text-gray-700">{{ comment.message }}</p>
               </div>
            </div>
            <div class="p-4 mt-5 bg-white border border-gray-300 rounded-xl">
              <input type="text" class="w-full border border-white" />              
            </div>
         </div>
         <div v-else>
            <p>Loading chat data...</p>
         </div>
      </div>
   </div>
</template>

<style scoped>
/* Anda dapat menambahkan styling tambahan di sini jika diperlukan */
</style>
