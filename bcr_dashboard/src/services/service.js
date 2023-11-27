import Api from './Api'

export default{
    getAllRegions(){
        return Api().get('regions')
    },
    getAllDepartemets(){
        return Api().get('get-all-departement')
    },
    getAllCommune(){
        return Api().get('get-all-commune')
    },
    getAllZd(){
        return Api().get('get-all-zd')
    },
    getEtat(region, dep, com, zd){
        return Api().get('etat/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getDepartementByRegion(region){
        return Api().get('departements/'+region)
    },
    getCommuneByDepartment(region, departement){
        return Api().get('communes/'+region+"/"+departement)
    },
    getZDByRegion(region, departement, com){
        return Api().get('zd/'+region+"/"+departement+'/'+com)
    },
    getPopulation(region, dep, com, zd){
        return Api().get('region-population/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getPopSexe(region, dep, com, zd){
        return Api().get('region-pop-sexe/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getMasc(region, dep, com, zd){
        return Api().get('region-masc/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getMoyOrd(region, dep, com, zd){
        return Api().get('region-moy-ord/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getAgricole(region, dep, com, zd){
        return Api().get('region-agricole/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getRRAVI(region, dep, com, zd){
        return Api().get('rap-resident/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getAgeMoyenne(region, dep, com, zd){
        return Api().get('region-age-moyenne/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getParite(region, dep, com, zd){
        return Api().get('parite/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getProportionCinq(region, dep, com, zd){
        return Api().get('proportion-cinq/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getMoyenDece(region, dep, com, zd){
        return Api().get('moyen-dece/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getMoyenEmigre(region, dep, com, zd){
        return Api().get('moyen-emigre/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getMembreUn(region, dep, com, zd){
        return Api().get('membre-un/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getMembreDix(region, dep, com, zd){
        return Api().get('membre-dix/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getAvancementJour(region, dep, com, zd){
        return Api().get('nbre-denombre/'+region+'/'+dep+'/'+com+'/'+zd);
    },
    getPopRegionSexe(){
        return Api().get('population-by-region');
    },
    getProResidentByRegion(region, dep, com, zd){
        return Api().get('region-resident/'+region+'/'+dep+'/'+com+'/'+zd);
    }


}