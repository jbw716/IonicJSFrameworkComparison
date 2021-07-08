<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom" v-if="shouldShowTabBar">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { onMounted, onUnmounted, ref } from 'vue';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    const shouldShowTabBar = ref(window.innerWidth <= 992);
    const windowResized = () => shouldShowTabBar.value = window.innerWidth <= 992;
    onMounted(() => window.addEventListener('resize', windowResized))
    onUnmounted(() => window.removeEventListener('resize', windowResized))
    return {
      ellipse,
      square,
      triangle,
      shouldShowTabBar,
      windowResized
    }
  }
}
</script>