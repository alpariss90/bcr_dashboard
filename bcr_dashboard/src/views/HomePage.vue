<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
  

      <div id="container">
        <strong>Ready to create an app?</strong>
        <router-link to="/accueil" class="nav-link">ACCUEIL</router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup >
import { IonContent, IonPage, } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
