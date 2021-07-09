<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Tab 1</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button>
            <ion-icon :icon="menu"></ion-icon>
          </ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item v-for="(item, index) in new Array(20)" :key="index">
          <div style="width: 100%; overflow: auto; white-space: nowrap">
            <pizza-card
              v-for="(item, indexx) in new Array(20)"
              :key="`card#${index}:${indexx}`"
            ></pizza-card>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";
import { menu } from "ionicons/icons";
import PizzaCard from "./PizzaCard.vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonIcon,
    IonMenuButton,
    IonButtons,
    PizzaCard,
  },
  setup() {
    return {
      menu
    };
  },
  data() {
    return {
      bgc: "white",
    };
  },
};
</script>