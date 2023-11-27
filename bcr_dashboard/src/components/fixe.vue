<template>
    <div class="col-lg-12" style="border-style: solid; ">
        <div class="row">
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">POPULATION <br>CARTO</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="popCarto" v-model="fixe.popCarto">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">TOTAL<br>POPULATION</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="population" v-model="fixe.population">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">POPULATION<br>HOMME</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="popHomme" v-model="fixe.popHomme">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">POPULATION<br>FEMME</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="popFemme" v-model="fixe.popFemme">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">RAPPORT DE <br>MASCULINITE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="masc" v-model="fixe.masc">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">MOYENNE MEN <br>ORDINAIRE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="moyOrd" v-model="fixe.moyOrd">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">NOMBRE MEN<br> AJOUTE DEN</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="population_ajoute" v-model="fixe.population_ajoute">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">NOMBRE MEN<br>ENUMERE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="enumere" v-model="fixe.enumere">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">NOMBRE MEN<br>DENOMBRE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="denombre" v-model="fixe.denombre">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">NOMBRE MEN <br>CARTO</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="carto" v-model="fixe.carto">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">ECART<br>&nbsp;</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="ecart" v-model="fixe.ecart">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">PROGRESSION <br>DU COLLECTE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="progression" v-model="fixe.progression">
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">% MENAGE<br> AGRICOLE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="agricole" v-model="fixe.agricole">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">RAPPORT <br>RAVI</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="rravi" v-model="fixe.rravi">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">ÂGE MOYEN<br>DES INDIVIDUS</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="ageMoyenne" v-model="fixe.ageMoyenne">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">PARITE <br>ATTEINTE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="parite" v-model="fixe.parite">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">% Enfant<br> -Cinq ans</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="proportion_cinq" v-model="fixe.proportion_cinq">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">MOYENNE DECE<br> / MENAGE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="moyen_dece" v-model="fixe.moyen_dece">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">μ EMIGRE<br> / MENAGE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="moyen_emigre" v-model="fixe.moyen_emigre">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">NBRE MENAGE<br> UN MEMBRE</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="membre_un" v-model="fixe.membre_un">
                </div>
                <div class="col-lg-1">
                    <span style="font-size: small; font-weight: bold;">NBRE MENAGE<br> +10 MEMBRES</span>
                    <input type="text" style="color: green; font-size: large;" disabled class="form-control" id="membre_dix" v-model="fixe.membre_dix">
                </div>

            </div>
            <hr>
    </div>

</template>
<script>
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue';

export default defineComponent({
    name: 'fixeComponent',
    props: ['service', 'region', 'departement', 'commune', 'zd'],
    setup(props){
        /**
         * Data
         */

         const state=reactive({
            fixe:{
                popCarto: '',
                population: '',
                compopHommemune: '',
                popFemme: '',
                masc: '',
                moyOrd: '',
                population_ajoute: '',
                enumere: '',
                denombre: '',
                carto: '',
                ecart: '',
                progression: '',
                agricole: '',
                rravi: '',
                ageMoyenne: '',
                parite: '',
                proportion_cinq: '',
                moyen_dece: '',
                moyen_emigre: '',
                membre_un: '',
                membre_dix: ''
            }
        })

        /***
         * Methods
         */

        const getEtat=async ()=>{
            try {
                //console.log(props.region+" "+props.departement+" "+props.commune+" "+props.zd);
                const response=await props.service.getEtat(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.population_ajoute=row['population_ajoute']
                state.fixe.carto=row['carto']
                state.fixe.popCarto=row['population_carto']
                state.fixe.enumere=row['enumere']
                state.fixe.denombre=row['denombre']
                state.fixe.ecart=row['ecart']
                state.fixe.progression=row['progression']
            } catch (error) {
                console.log("error getEtat "+error);
            }
        }
        const getPopulation=async()=>{
            try {
                const response=await props.service.getPopulation(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.population=row['nbre']
            } catch (error) {
                console.log("error getPopulation"+error);
            }
        }

        const getPopSexe=async()=>{
            try {
                const response=await props.service.getPopSexe(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.popHomme=row['homme']
                state.fixe.popFemme=row['femme']
            } catch (error) {
                console.log("error getPopSexe"+error);
            }
        }

        const getMasc=async()=>{
            try {
                const response=await props.service.getMasc(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.masc=row['masc']
            } catch (error) {
                console.log("error getMasc"+error);
            }
        }

        const getMoyOrd=async()=>{
            try {
                const response=await props.service.getMoyOrd(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.moyOrd=row['moy']
            } catch (error) {
                console.log("error getMoyOrd"+error);
            }
        }

        const getAgricole=async()=>{
            try {
                const response=await props.service.getAgricole(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.agricole=row['agricole']
            } catch (error) {
                console.log("error getAgricole"+error);
            }
        } 

        const getRRAVI=async()=>{
            try {
                const response=await props.service.getRRAVI(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.rravi=row['resident']
            } catch (error) {
                console.log("error getRRAVI"+error);
            }
        }
        

        const getAgeMoyenne=async()=>{
            try {
                const response=await props.service.getAgeMoyenne(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.ageMoyenne=row['nbre']
            } catch (error) {
                console.log("error getAgeMoyenne"+error);
            }
        }

        const getParite=async()=>{
            try {
                const response=await props.service.getParite(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.parite=row['parite']
            } catch (error) {
                console.log("error getParite"+error);
            }
        }

        const getProportionCinq=async()=>{
            try {
                const response=await props.service.getProportionCinq(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.proportion_cinq=row['proportion_cinq']
            } catch (error) {
                console.log("error getProportionCinq"+error);
            }
        }

        const getMoyenDece=async()=>{
            try {
                const response=await props.service.getMoyenDece(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.moyen_dece=row['moyen_dece']
            } catch (error) {
                console.log("error getMoyenDece"+error);
            }
        }

        const getMoyenEmigre=async()=>{
            try {
                const response=await props.service.getMoyenEmigre(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.moyen_emigre=row['moyen_emigre']
            } catch (error) {
                console.log("error getMoyenEmigre"+error);
            }
        }

        const getMembreUn=async()=>{
            try {
                const response=await props.service.getMembreUn(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.membre_un=row['nbre']
            } catch (error) {
                console.log("error getMembreUn"+error);
            }
        }

        const getMembreDix=async()=>{
            try {
                const response=await props.service.getMembreDix(props.region, props.departement, props.commune, props.zd)
                const row=response.data.rows[0]
                state.fixe.membre_dix=row['nbre']
            } catch (error) {
                console.log("error getMembreDix"+error);
            }
        }
        
        
        
        const globalFun=()=>{
            getEtat(),getPopulation(),getPopSexe(),getMasc(),getMoyOrd(),getAgricole(),getRRAVI(), getAgeMoyenne(),getParite(),getProportionCinq(),getMoyenDece(), getMoyenEmigre(), getMembreUn(), getMembreDix()
        }


         /***
          * Computed / watch
          */

          watch(()=>props.region, () => {
            //console.log("reg wa");
            globalFun()
          })
          watch(()=>props.departement, () => {
            //console.log("dep wa");
            globalFun()
          })
          watch(()=>props.commune, () => {
            //console.log("com wa");
            globalFun()
          })
          watch(()=>props.zd, () => {
            //console.log("zd wa");
            globalFun()
          })




      

          /***
           * Hooks
           */

           onMounted(()=>{
            globalFun()
           })


           return{
            ...toRefs(state)
           }
    }
})
</script>