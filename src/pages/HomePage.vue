<script setup>
import { ref, onMounted } from 'vue';
import chatDataJson from '@/lib/chat.json'; 

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
            v-for="participant in chatData.results[0]?.room.participant || []"
            :key="participant.id"
            class="flex items-center p-2 cursor-pointer hover:bg-gray-100"
          >
            <div class="flex items-center justify-center w-10 h-10 mr-2 text-white bg-gray-300 rounded-full">
              {{ participant.name[0] }} <!-- Menampilkan inisial peserta -->
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
        <h2 class="text-2xl font-bold">{{ chatData.results[0].room.name }}</h2>
        <img
          :src="chatData.results[0].room.image_url"
          alt="Room Image"
          class="mb-4 rounded-lg shadow-md"
        />
        
        <h3 class="mb-2 text-lg font-semibold">Chat</h3>
        <div class="p-4 overflow-auto border border-gray-300 rounded-lg h-96">
          <div
            v-for="comment in chatData.results[0].comments"
            :key="comment.id"
            class="mb-2"
          >
            <strong class="font-semibold">{{ comment.sender }}:</strong>
            <p class="text-gray-700">{{ comment.message }}</p>
          </div>
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
