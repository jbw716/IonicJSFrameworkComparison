<template>
  <ion-app>
    <split-pane></split-pane>
  </ion-app>
</template>

<script lang="ts">
import { IonApp } from "@ionic/vue";
import SplitPane from "@/views/SplitPane.vue";

export default {
  name: "App",
  components: {
    IonApp,
    SplitPane,
  },
};
</script>