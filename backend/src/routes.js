const controller=require('./controller')


module.exports=(app)=>{
app.get('/', controller.accueil),
app.get('/menage-head',  controller.getMenageHead),

app.get('/regions', controller.getRegion),

app.get('/region-sexe/:region/:dep/:com/:zd', controller.getProportionParSexe),

app.get('/region-resident/:region/:dep/:com/:zd', controller.getProportionParResident),

app.get('/region-population/:region/:dep/:com/:zd', controller.getProportionParPopulation),

app.get('/region-age-moyenne/:region/:dep/:com/:zd', controller.getProportionParAgeMoyenne),

app.get('/region-agricole/:region/:dep/:com/:zd',controller.getProportionAgricole),

app.get('/region-masc/:region/:dep/:com/:zd',controller.getProportionMasc),

app.get('/region-moy-ord/:region/:dep/:com/:zd', controller.getProportionMoyOrd),

app.get('/region-pop-sexe/:region/:dep/:com/:zd',controller.getPopParSexe),

app.get('/etat/:region/:dep/:com/:zd',controller.getEtat),

app.get('/rap-resident/:region/:dep/:com/:zd', controller.getRapportResident),

app.get('/parite/:region/:dep/:com/:zd',controller.getParite),

app.get('/proportion-cinq/:region/:dep/:com/:zd',controller.getProportionCinq)

app.get('/moyen-dece/:region/:dep/:com/:zd',  controller.getMoyenDece),

app.get('/moyen-emigre/:region/:dep/:com/:zd',controller.getMoyenEmigre),

app.get('/membre-un/:region/:dep/:com/:zd', controller.getNbreMenageUnIndividu),

app.get('/membre-dix/:region/:dep/:com/:zd',controller.getNbreMenageDixIndividu),

app.get('/nbre-denombre/:region/:dep/:com/:zd', controller.getNbreMenageJour),

app.get('/departements/:region', controller.getDepartement),

app.get('/communes/:region/:dep', controller.getCommune),

app.get('/zd/:region/:dep/:com',controller.getZD),

app.get('/population-by-region', controller.getPopulationByRegion)

app.get('/get-all-departement', controller.getAllDepartement)
app.get('/get-all-commune', controller.getAllCommune)
app.get('/get-all-zd', controller.getAllZd)
}