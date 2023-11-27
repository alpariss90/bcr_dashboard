<template>
    <!--<h5>RENDEMENT JOURNALIER</h5>-->
    <canvas ref="myChartResidence"></canvas>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, watch, ref } from 'vue';
import Chart from 'chart.js/auto'

export default defineComponent({
    name: 'residentDiagramme',
    props: ['service', 'region', 'departement', 'commune', 'zd'],
    setup(props) {
        const state = reactive({
            residentPresent: '',
            residentAbsent: '',
            visiteur: '',
            chart_resident: '',
            ct_resident: ''
        })

        const myChartResidence = ref(null)



        /***
         * Methods
         */




        const getProResidentByRegion = async () => {
            try {
                const response = await props.service.getProResidentByRegion(props.region, props.departement, props.commune, props.zd);
                state.residentPresent = response.data.rows[0].nbre
                state.residentAbsent = response.data.rows[1].nbre
                state.visiteur = response.data.rows[2].nbre
            } catch (error) {
                console.log("erro getProResidentByRegion " + error);
            }
        }

        const config = () => {
            const chartResident = {
                type: 'bar',
                data: {
                    labels: ['RESIDENT PRESENT', 'RESIDENT ABSENT', 'VISITEUR'],
                    datasets: [{
                        //label: 'RESIDENT',
                        data: [state.residentPresent, state.residentAbsent, state.visiteur],
                        backgroundColor: ['blue', 'red', 'green'],
                        borderWidth: 0.4
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'SITUATION DE RESIDENCE'
                        },
                        datalabels: {
                            color: "black",
                            font: {
                                weight: 'bold',
                                size: 16,
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
                    },
                    aspectRatio: 2,
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            }
            return chartResident
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
            await getProResidentByRegion()
            state.ct_resident = myChartResidence.value.getContext('2d');
            state.chart_resident = new Chart(state.ct_resident, config());
        })




        /***
         * Watch
         */

        watch(() => props.region, async () => {
            await getProResidentByRegion()
            state.chart_resident.destroy()
            state.chart_resident = new Chart(state.ct_resident, config());
        })
        watch(() => props.departement, async () => {
            if (props.departement > 0) {
                await getProResidentByRegion()
                state.chart_resident.destroy()
                state.chart_resident = new Chart(state.ct_resident, config());
            }

        })
        watch(() => props.commune, async () => {
            if (props.commune > 0) {
                await getProResidentByRegion()
                state.chart_resident.destroy()
                state.chart_resident = new Chart(state.ct_resident, config());
            }

        })
        watch(() => props.zd, async () => {
            if (props.zd > 0) {
                await getProResidentByRegion()
                state.chart_resident.destroy()
                state.chart_resident = new Chart(state.ct_resident, config());
            }

        })

        return {
            ...toRefs(state), myChartResidence
        }
    }
})
</script>

<style></style>