<template>
    <!--<h5>POPULATION PAR REGION ET SEXE</h5>-->
    <canvas  ref="myChartPopRegionSexe"></canvas>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, ref } from 'vue';
import Chart from 'chart.js/auto'
import ChartJSPluginDatalabels from "chartjs-plugin-datalabels";
Chart.register(ChartJSPluginDatalabels)

export default defineComponent({
    name: 'poupulationDiagramme',
    props: ['service'],
    setup(props) {
        const state = reactive({
            dataRegion: [],
            dataHomme: [],
            dataFemme: [],
            chart_pop_region: '',
            ct_pop_region: ''
        })

        const myChartPopRegionSexe=ref(null)



        /***
         * Methods
         */

        const getDataRegion = (rows) => {
            var region = [];
            for (var i = 0; i < rows.length; i++) {
                region.push(getRegion(rows[i].region));
            }
            return region;
        }

        const getDataHomme = (rows) => {
            var homme = [];
            for (var i = 0; i < rows.length; i++) {
                homme.push(rows[i].homme);
            }
            return homme;
        }

        const getDataFemme = (rows) => {
            var femme = [];
            for (var i = 0; i < rows.length; i++) {
                femme.push(rows[i].femme);
            }
            return femme;
        }

        const getRegion=(num)=>{
                if(num==1)
                    return "AGADEZ";
                    if(num==2)
                    return "DIFFA";
                    if(num==3)
                    return "DOSSO";
                    if(num==4)
                    return "MARADI";
                    if(num==5)
                    return "TAHOUA";
                    if(num==6)
                    return "TILLABERY";
                    if(num==7)
                    return "ZINDER";
                    if(num==8)
                    return "NIAMEY";
            }


        const getPopulationSexe = async () => {
            try {
                const response = await props.service.getPopRegionSexe();
                //console.log("----");
                //console.log(response.data);
                state.dataRegion = getDataRegion(response.data.rows)
                state.dataHomme = getDataHomme(response.data.rows)
                state.dataFemme = getDataFemme(response.data.rows)
                //console.log(state);
            } catch (error) {
                console.log("erro getPopulationSexe " + error);
            }
        }

        const config = () => {
            const chartPopulation = {
                type: 'bar',
                data: {
                    labels: state.dataRegion,
                    datasets: [
                        {
                            label: 'HOMMES',
                            data: state.dataHomme,
                            backgroundColor: ["#269d2f"],
                        },
                        {
                            label: 'FEMMES',
                            data: state.dataFemme,
                            backgroundColor: ["#F07D0A"],
                        },
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'POPULATION PAR REGION ET SEXE'
                        },
                        datalabels: {
                            color: "white",
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
                    },
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true
                        }
                    }
                }
            }
            return chartPopulation
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
            await getPopulationSexe()
            state.ct_pop_region = myChartPopRegionSexe.value.getContext('2d')
            state.chart_pop_region = new Chart(state.ct_pop_region, config());
        })




        /***
         * Watch
         */



        return {
            ...toRefs(state), myChartPopRegionSexe
        }
    }
})
</script>

<style></style>