<template>
  <div class="user">
    <h1>This is an user page. {{ this.$route.params.id }}</h1>
    <!-- http://localhost:8080/#/user/3?q=hogehoge -->
    <p>{{ this.$route.query.q }}</p>
    <router-link :to="{ name: 'first'}">First</router-link> |
    <router-link :to="{ name: 'second'}">Second</router-link>
    <router-view/>
  </div>
</template>
