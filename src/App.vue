<script setup></script>

<template>
  <div id="nav">
    <router-link class="router-link" to="/">Home</router-link>
    <router-link class="router-link" to="/newresult">New result</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
#nav {
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.router-link {
  margin-right: 16px;
  text-decoration: none;
  color: #ffffff;
  transition: color 0.2s ease-in-out;
}

.router-link:hover {
  color: #48f955;
}
</style>
