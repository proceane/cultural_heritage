<template>
  <v-app>
    <v-app-bar app color="gray" light>
      <div class="d-flex align-center">
        우리집박물관
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
