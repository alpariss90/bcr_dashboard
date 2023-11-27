<template>
   
    <div class="row" >
        <div class="col-lg-12 col-sm-12 col-xs-12" style="border-style: solid;padding-bottom: 10px;">
            <div class="row">
                <div class="col-lg-3 col-sm-3 col-xs-3">
                    <label>REGION </label>
                    <select class="form-control form-control-sm" name="region" id="region" v-model="filtre.region" @change="sendToParent('reg')">
                        <option value="0" checked>NATIONAL</option>
                        <option  v-for="r in regions" :key="r.code_region" :value="r.code_region">{{r.libelle_region}}</option>
                    </select> 
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-3">
                    <label>DEPARTEMENT </label>
                    <select class="form-control form-control-sm" name="dep" id="dep" v-model="filtre.departement"  @change="sendToParent('dep')"> 
                        <option v-for="d in c_departement" :key="d.code_departement" :value="d.code_departement">{{ d.departement }}</option>
                    </select>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-3">
                    <label>COMMUNE  </label>
                    <select class="form-control form-control-sm" name="com" id="com" v-model="filtre.commune"  @change="sendToParent('com')">
                        <option v-for="c in c_commune" :key="c.code_commune" :value="c.code_commune">{{ c.commune }}</option>
                    </select>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-3">
                    <label>ZD </label>
                    <select class="form-control form-control-sm" name="zd" id="zd" v-model="filtre.zd"  @change="sendToParent('zd')">
                        <option v-for="z in c_zd" :key="z.zd" :value="z.zd">{{ z.zd }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed} from 'vue'
//import service from './../services/service'

export default {
    name: "filtreComponent",
    setup(props, context){
        /**
         * Data
         */

        const state=reactive({
            regions: [],
            departements: [],
            communes: [],
            zds:[],
            filtre:{
                region: 0,
                departement: 0,
                commune: 0,
                zd: 0
            }
        })

        /***
         * Methods
         */

         const init=async()=>{
            try {
                const r1=await props.service.getAllRegions()
                const r2=await props.service.getAllDepartemets()
                const r3=await props.service.getAllCommune()
                const r4=await props.service.getAllZd()
                state.regions=r1.data.rows
                state.departements=r2.data.rows
                state.communes=r3.data.rows
                state.zds=r4.data.rows
            } catch (error) {
                console.log("Error init "+error);
            }
         }


         const sendToParent=(obj)=>{
            if(obj=='reg'){
                state.filtre.departement=0
               state.filtre.commune=0
                state.filtre.zd=0
            }else if(obj=='dep'){
                state.filtre.commune=0
                state.filtre.zd=0
            }else if(obj=='com'){
                state.filtre.zd=0
                
            }
           // alert(state.filtre.region+"-"+state.filtre.departement+"-"+state.filtre.commune+"-"+state.filtre.zd+"-")
            context.emit('getFormChild', {region: state.filtre.region, dep: state.filtre.departement, com: state.filtre.commune, zd: state.filtre.zd})
         }

        



         /***
          * Computed
          */
          const c_departement=computed(()=>{
            return state.departements.filter(d =>{
               return  d.code_region==state.filtre.region
            })
         })
         const c_commune=computed(()=>{
            return state.communes.filter(d =>{
               return  d.code_departement==state.filtre.departement && d.code_region==state.filtre.region
            })
         })
         const c_zd=computed(()=>{
            return state.zds.filter(d =>{
               return  d.code_commune==state.filtre.commune && d.code_departement==state.filtre.departement && d.code_region==state.filtre.region
            })
         })


          /***
           * Hooks
           */

           onMounted(()=>{
            init()
           })


           return{
            ...toRefs(state), init, c_departement, c_commune, c_zd, sendToParent
           }
    },
    props: ['service'],
    emits:['getFormChild']
}
</script>