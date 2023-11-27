<template>
    <div class="row" style=" background-color: #e9b680 ; height: 35px; vertical-align: baseline; font-weight: bold;">
        <p>FILTRE : <span> <span class="regionFiltre" style="color: #269d2f; "></span></span> <span><span
                    class="departementFiltre" style="color: #269d2f;"></span></span> <span><span class="communeFiltre"
                    style="color: #269d2f; "></span></span> <span> <span class="zdFiltre"
                    style="color: #269d2f; "></span></span></p>
    </div>
    <hr>
    <div class="row" style="margin-top: 35px;">

        <div class="col-lg-6">
            <h5>RENDEMENT JOURNALIER</h5>
            <canvas id="myChartAvancementJour"></canvas>
        </div>

        <div class="col-lg-6">
            <h5>POPULATION PAR REGION ET SEXE</h5>
            <canvas id="myChartPopRegionSexe"></canvas>
        </div>
        <!--<div class="col-lg-4">
                    <h5>AVANCEMENT COLLECTE PAR DATE</h5>
                    <canvas id="myChartAvancementJou"></canvas>
                </div>-->
    </div>
    <hr>

    <div class="row" style=" background-color: #e9b680 ; height: 35px; vertical-align: baseline; font-weight: bold;">
        <p>FILTRE : <span> <span class="regionFiltre" style="color: #269d2f; "></span></span> <span><span
                    class="departementFiltre" style="color: #269d2f;"></span></span> <span><span class="communeFiltre"
                    style="color: #269d2f; "></span></span> <span> <span class="zdFiltre"
                    style="color: #269d2f; "></span></span></p>
    </div>
    <hr>
    <div class="row" style="margin-top: 35px;">
        <div class="col-lg-6">
            <h5>% DE POPULATION PAR SEXE</h5>
            <canvas id="myChartSexe"></canvas>
        </div>
        <div class="col-lg-6">
            <h5>SITUATION DE RESIDENCE</h5>
            <canvas id="myChartResidence"></canvas>
        </div>
    </div>
    <!--
            <div class="row" style="margin-top: 35px;">
                <div class="col-lg-6">
                    <h5>NOMBRE DE POPULATION PAR TRANCHE D'ÂGE</h5>
                    <canvas id="myChartTranche"></canvas>
                </div>
                <div class="col-lg-6">
                    <h5>AVANCEMENT DE COLLECTE PAR REGION</h5>
                    <canvas id="myChartAvancement"></canvas>
                </div>
            </div>
-->
</template>

<script>
import { defineComponent, reactive, onMounted, toRefs } from 'vue';
import Chart from 'chart.js/auto'
import data from './../diagramme-data/data'


export default defineComponent({
    name: 'diagrammeComponent',
    setup() {
        const state = reactive({
            chartAvancement: data.chartAvancement
        })

        onMounted(() => {
            const cty = document.getElementById('myChartAvancementJour');
            new Chart(cty, state.chartAvancement);
        })

        return {
            ...toRefs(state)
        }
    }
    /*
    mounted() {
         const ctx = document.getElementById('planet-chart');
         new Chart(ctx, this.planetChartData);
        
    }*/
})
</script>

<style></style>