<template>
    <!--<h5>RENDEMENT JOURNALIER</h5>-->
    <canvas ref="myChartAvancementJour"></canvas>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, watch, ref } from 'vue';
import Chart from 'chart.js/auto'

export default defineComponent({
    name: 'avancementDiagramme',
    props: ['service', 'region', 'departement', 'commune', 'zd'],
    setup(props) {
        const state = reactive({
            avancementDate: [],
            avancementNbre: [],
            chart_avancemt_jour: '',
            ct_avancement_jour: ''
        })

        const myChartAvancementJour = ref(null)



        /***
         * Methods
         */


        const getDataNbre = (rows) => {
            var nbre = [];
            for (var i = 0; i < rows.length; i++) {
                nbre.push(rows[i].nbre);
            }
            return nbre;
        }
        const getDataDate = (rows) => {
            var date_fin = [];
            for (var i = 0; i < rows.length; i++) {
                date_fin.push(rows[i].date_fin);
            }
            return date_fin;
        }



        const getAvancementJour = async () => {
            try {
                const response = await props.service.getAvancementJour(props.region, props.departement, props.commune, props.zd);
                //console.log("----");
                //console.log(response.data);
                state.avancementDate = getDataDate(response.data.rows)
                state.avancementNbre = getDataNbre(response.data.rows)
                //console.log(state);
            } catch (error) {
                console.log("erro getAvancementJour " + error);
            }
        }

        const config = () => {
            const chartAvancement = {
                type: 'line',
                data: {
                    //labels: ['AGADEZ', 'DIFFA', 'DOSSO', 'MARADI', 'TAHOUA', 'TILLABERY', 'ZINDER', 'NIAMEY'],
                    labels: JSON.parse(JSON.stringify(state.avancementDate)),
                    datasets: [{
                        label: 'nombre ménage dénombré  ',
                        data: JSON.parse(JSON.stringify(state.avancementNbre)),
                        //data: [45, 4, 2, 88, 4, 6, 89, 120],
                        //data: v8,
                        //backgroundColor: ['blue', 'red'],
                        borderWidth: 0.4
                    }]
                },
                options: {
                    aspectRatio: 2,
                    indexAxis: 'x',
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'RENDEMENT JOURNALIER'
                        },
                        datalabels: {
                            color: "black",
                            font: {
                                weight: 'bold',
                                size: 12,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'center',
                            labels: {
                                color: 'black',
                                font: {
                                    weight: 'bold',
                                    size: 15
                                },
                            }
                        }
                    }
                }
            }
            return chartAvancement
        }
        /*
                const toIntObject = (obj) => {
                    //console.log(obj);
                    return obj.map(e => {
                        return e * 1
                    })
                }*/


        /***
         * Object
         */





        /**
         * Mounted/ computes
         */
        onMounted(async () => {
            await getAvancementJour()
            state.ct_avancement_jour = myChartAvancementJour.value.getContext("2d")
            state.chart_avancemt_jour = new Chart(state.ct_avancement_jour, config());
        })




        /***
         * Watch
         */

        watch(() => props.region, async () => {
            await getAvancementJour()
            state.chart_avancemt_jour.destroy()
            state.chart_avancemt_jour = new Chart(state.ct_avancement_jour, config());
        })
        watch(() => props.departement, async () => {
            if (props.departement > 0) {
                await getAvancementJour()
                state.chart_avancemt_jour.destroy()
                state.chart_avancemt_jour = new Chart(state.ct_avancement_jour, config());
            }
        })
        watch(() => props.commune, async () => {
            if (props.commune > 0) {
                await getAvancementJour()
                state.chart_avancemt_jour.destroy()
                state.chart_avancemt_jour = new Chart(state.ct_avancement_jour, config());
            }

        })
        watch(() => props.zd, async () => {
            if (props.zd > 0) {
                await getAvancementJour()
                state.chart_avancemt_jour.destroy()
                state.chart_avancemt_jour = new Chart(state.ct_avancement_jour, config());
            }

        })

        return {
            ...toRefs(state), myChartAvancementJour
        }
    }
})
</script>

<style></style>