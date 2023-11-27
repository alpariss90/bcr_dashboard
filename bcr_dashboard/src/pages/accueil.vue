<template>
    <ion-page>
        <ion-header>
            <div class="container-fluid p-3 text-white text-center" style="background-color: #269d2f">
                <img src="../../public/assets/ban.jpg" />
            </div>
            <div class="row" style=" background-color: #F07D0A ; ">
                <!-- height: 35px; vertical-align: baseline; font-weight: bold;
                <p style="text-align: center; font-size: 20px; color: black; font-weight: bold;">
                    DASHBOARD DE SUIVI DE LA COLLECTE
                </p>-->
                <!--<p>FILTRE : <span> <span class="regionFiltre" style="color: #269d2f; "></span></span> <span><span
                        class="departementFiltre" style="color: #269d2f;"></span></span> <span><span class="communeFiltre"
                        style="color: #269d2f; "></span></span> <span> <span class="zdFiltre"
                        style="color: #269d2f; "></span></span></p>-->
                <div>
                    <filtre-component :service="service" @getFormChild="getFormChild" />
                </div>
            </div>
        </ion-header>
        <ion-content :fullscreen="true">

            <div>
                <fixe-component :service="service" :region="c_regionRec" :departement="departementReceived"
                    :commune="communeReceived" :zd="zdReceived" />
            </div>
            <hr>
            <div class="row" style="margin-top: 35px;">

                <div class="col-lg-6">
                    <avancement-jour :service="service" :region="c_regionRec" :departement="departementReceived"
                        :commune="communeReceived" :zd="zdReceived" />
                </div>

                <div class="col-lg-6">
                    <poulation-diagramme :service="service" />

                </div>
            </div>
            <hr>
            <div class="row" style="margin-top: 35px;">

                <div class="col-lg-6">
                    <residence-diagramme :service="service" :region="c_regionRec" :departement="departementReceived"
                        :commune="communeReceived" :zd="zdReceived" />
                </div>

                <div class="col-lg-6">

                </div>
            </div>
            <hr>
        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-title style="text-align: center; font-size: 20px; color: black; font-weight: bold;">
                    DASHBOARD DE SUIVI DE LA COLLECTE
                </ion-title>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script>
import {  IonFooter, IonTitle, IonToolbar, IonPage, IonContent, IonHeader } from '@ionic/vue'
import filtreComponent from './../components/filtre.vue'
import fixeComponent from './../components/fixe.vue'
import avancementJour from '../components/avancement-jour.vue';
import poulationDiagramme from '../components/poulation-diagramme.vue';
import residenceDiagramme from '../components/residence-diagramme.vue';
import { defineComponent, computed, reactive, toRefs } from 'vue';
import service from '../services/service';

export default defineComponent({
    name: 'accueilPage',
    components: {
        filtreComponent, fixeComponent, avancementJour, IonContent, IonHeader,
        IonFooter, IonTitle, IonToolbar, IonPage,poulationDiagramme, residenceDiagramme
    },
    setup() {

        /***
         * Data
         */
        const state = reactive({
            regionReceived: 0,
            departementReceived: 0,
            communeReceived: 0,
            zdReceived: 0
        })



        /***
         * Methods
         */
        const getFormChild = (filtre) => {
            state.regionReceived = filtre.region
            state.departementReceived = filtre.dep
            state.communeReceived = filtre.com
            state.zdReceived = filtre.zd
        }


        /***
         * Computeds
         */
        const c_regionRec = computed(() => {
            return state.regionReceived
        })

        return { service, getFormChild, ...toRefs(state), c_regionRec }
    }
})
</script>
<style setup>
img {
    width: 80%;
}

ion-content {
    --padding-top: 10px;
    min-height: 100px;
}

ion-toolbar {
    --color: red;
    --background: #269d2f;

}
</style>