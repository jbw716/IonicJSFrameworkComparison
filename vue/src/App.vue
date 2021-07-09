<template>
  <div
    style="
      height: 25px;
      width: 200px;
      background-color: red;
      color: white;
      position: absolute;
      top: 20px;
      right: -70px;
      transform: rotate(45deg);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12pt;
      font-weight: bold;
    "
  >
    Vue
  </div>
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