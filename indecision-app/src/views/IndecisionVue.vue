<script setup lang="ts">
import ChatMessages from "@/chat/ChatMessages.vue";
import MessageBox from "@/chat/MessageBox.vue";
import type { ChatMessage } from '@/interfaces/chat-messages.interface.ts'
import {ref} from "vue";

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: "Hello",
    itsMine: true,
  },
  {
    id: new Date().getTime()+1,
    message: "SiS",
    itsMine: false,
    image: "https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif"
  }
])

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  })
}


</script><!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <div class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <ChatMessages :messages="messages"/>
      </div>
    </div>

    <MessageBox @send-message="onMessage($event)"/>
  </div>
</template>
