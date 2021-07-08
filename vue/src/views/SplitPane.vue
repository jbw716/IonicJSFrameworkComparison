<template>
  <ion-split-pane contentId="menu-content">
    <ion-menu content-id="menu-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Pantry</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-menu>
    <ion-router-outlet id="menu-content" />
  </ion-split-pane>
</template>

<script lang="ts">
import {
  IonSplitPane,
  IonRouterOutlet,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

export default {
  name: "SplitPane",
  components: {
    IonSplitPane,
    IonRouterOutlet,
    IonHeader,
    IonMenu,
    IonTitle,
    IonToolbar,
  },
};
</script>