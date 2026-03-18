<script setup lang="ts">
import ChatBubble from "@/chat/ChatBubble.vue";
import type {ChatMessage} from "@/interfaces/chat-messages.interface.ts";

interface Props {
  messages: ChatMessage[];
}

defineProps<Props>()

</script>

<template>
  <!-- Example Message -->
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble
        v-for="message in messages"
        :key="message.id"
        v-bind="message"/>
<!--        :its-mine="message.itsMine"-->
<!--        :message="message.message"-->
<!--        :image="message.image"-->
<!--      />-->
<!--      <ChatBubble :its-mine="false" message="sis" image="https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif"/>-->
    </div>
  </div>
</template>

<style scoped></style>
