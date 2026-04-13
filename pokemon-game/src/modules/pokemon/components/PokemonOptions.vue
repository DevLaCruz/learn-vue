<template>
  <section class="mt-5">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* li {
  @apply bg-white shadow-md rounded-lg p-3 mb-2 cursor-pointer w-40 transition-all text-center duration-300 hover:bg-gray-100;
} */

li {
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  width: 10rem;
  transition: all 0.3s;
  text-align: center;
}

li:hover {
  background-color: #f3f4f6;
}
</style>
