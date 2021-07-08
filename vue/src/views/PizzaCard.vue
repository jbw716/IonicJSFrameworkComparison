<template>
  <ion-card
    @click="pizzaCount++"
    style="
      background-color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      width: auto;
      height: auto;
    "
  >
    <div>
      <ion-card
        style="
          width: 25px;
          height: 25px;
          margin: auto;
          display: flex;
          alignitems: center;
          justifycontent: center;
          backgroundcolor: white;
        "
      >
        <ion-icon
          style="color: black; width: 100%; height: 100%"
          :icon="pizza"
        ></ion-icon>
      </ion-card>
      <ion-label style="width: 100%; text-align: center">Pizza!</ion-label>
      <ion-text>It's {{ pizzaCount }} slice of pizza!</ion-text>
    </div>
  </ion-card>
</template>
<script lang="ts">
import { IonCard, IonIcon, IonLabel, IonText } from "@ionic/vue";
import { pizza } from "ionicons/icons";
import { ref, watch } from "vue";
export default {
  name: "pizza-card",
  components: {
    IonText,
    IonIcon,
    IonCard,
    IonLabel,
  },
  setup() {
    const pizzaCount = ref(0);
    return {
      pizza,
      pizzaCount,
    };
  },
};
</script>
<style lang="">
</style>