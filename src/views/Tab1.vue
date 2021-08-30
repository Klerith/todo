<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>ion list</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Games</ion-title>
        </ion-toolbar>
      </ion-header>
      <hr>
      <ion-list ref="ionListGames">
        
        <!-- <ion-item v-for="game in games" :key="game">
          <ion-label>{{ game }}</ion-label>
        </ion-item> -->


        <ion-item-sliding 
          v-for="game in games" 
          :key="game.id">

          <ion-item>
            <ion-label>{{ game.name }}</ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option @click="onToggleFavoriteGame(game)">
              <ion-icon :icon="game.isFavorite ? heartCircle : heartOutline"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>


      </ion-list>
    
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonItemSliding, IonItemOption, IonItemOptions, IonIcon } from '@ionic/vue';
import { heartOutline, heartCircle } from 'ionicons/icons'

import { ref } from '@vue/reactivity';

import { Game } from '@/interfaces/interfaces';
import { useGames } from '../composables/useGames';


export default  {
  name: 'Tab1',
  components: { 
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonItem, IonList, IonItemSliding, IonItemOption, IonItemOptions, IonIcon,
  },
  setup() {
    
    const ionListGames = ref<any>(null)
    const { games, toggleFavorite } = useGames()


    return {
      games,
      ionListGames,

      heartOutline,
      heartCircle,

      onToggleFavoriteGame: ( game: Game ) => {
        ionListGames.value.$el.closeSlidingItems()
        toggleFavorite( game )
      },

    }

  }
}
</script>