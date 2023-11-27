const {QueryTypes, sequelize}=require('./provider')


module.exports={
    accueil(req, res){
        res.send({message: 'Hello route'})
    },
    async getDepartement(req, res){
        const departements=await sequelize.query("select distinct code_departement, departement from head where code_region=:region",{
            replacements: {region: req.params.region},
            type: QueryTypes.SELECT
        })

        res.send({rows: departements})
    },
    async getMenageHead(req, res){
        const menages=await sequelize.query("select * from menage_head",{
            replacements: {},
            type: QueryTypes.SELECT
        })
        res.send({rows: menages})
    },
    async getProportionParSexe(req, res){

        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select round((sum(homme) * 100/(sum(homme)+ sum(femme))),2) as homme, round((sum(femme) * 100/(sum(homme)+ sum(femme))),2) as femme from sexe';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select region,  round((sum(homme) * 100/(sum(homme)+ sum(femme))),2) as homme, round((sum(femme) * 100/(sum(homme)+ sum(femme))),2) as femme from sexe where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select region, departement,  round((sum(homme) * 100/(sum(homme)+ sum(femme))),2) as homme, round((sum(femme) * 100/(sum(homme)+ sum(femme))),2) as femme from sexe where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select region, departement,commune,  round((sum(homme) * 100/(sum(homme)+ sum(femme))),2) as homme, round((sum(femme) * 100/(sum(homme)+ sum(femme))),2) as femme from sexe where  region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select region, departement,commune,zd,  round((sum(homme) * 100/(sum(homme)+ sum(femme))),2) as homme, round((sum(femme) * 100/(sum(homme)+ sum(femme))),2) as femme from sexe where  region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getProportionParResident(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select C04 as resident, count(C04) as nbre from individus where C04 is not null group by c04';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select C04 as resident, count(C04) as nbre from individus where C04 is not null and  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select C04 as resident, count(C04) as nbre from individus where C04 is not null and  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select C04 as resident, count(C04) as nbre from individus where C04 is not null and  region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select C04 as resident, count(C04) as nbre from individus where C04 is not null and  region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getProportionParPopulation(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select sum(homme + femme) as nbre from sexe';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select sum(homme + femme) as nbre from sexe where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select sum(homme + femme) as nbre from sexe where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select sum(homme + femme) as nbre from sexe where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select sum(homme + femme) as nbre from sexe where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getProportionParAgeMoyenne(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select avg(age) as nbre from individus';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select avg(age) as nbre from individus where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select avg(age) as nbre from individus where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select avg(age) as nbre from individus where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select avg(age) as nbre from individus where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getProportionAgricole(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select round(((sum(agri)*100)/sum(total)), 2) as agricole  from agricole';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select round(((sum(agri)*100)/sum(total)), 2) as agricole  from agricole where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select round(((sum(agri)*100)/sum(total)), 2) as agricole  from agricole where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select round(((sum(agri)*100)/sum(total)), 2) as agricole  from agricole where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select round(((sum(agri)*100)/sum(total)), 2) as agricole  from agricole where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getProportionMasc(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select  round(((sum(homme)*100/sum(femme))),1)  as masc from sexe';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select  round(((sum(homme)*100/sum(femme))),1)  as masc from sexe where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select  round(((sum(homme)*100/sum(femme))),1)  as masc from sexe where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select  round(((sum(homme)*100/sum(femme))),1)  as masc from sexe where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select  round(((sum(homme)*100/sum(femme))),1)  as masc from sexe where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getProportionMoyOrd(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='SELECT round(avg(taille)) as moy FROM nombre_menage';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='SELECT round(avg(taille)) as moy FROM nombre_menage where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='SELECT round(avg(taille)) as moy FROM nombre_menage where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='SELECT round(avg(taille)) as moy FROM nombre_menage where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='SELECT round(avg(taille)) as moy FROM nombre_menage where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getPopParSexe(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select sum(homme) as homme, sum(femme) as femme from sexe';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select sum(homme) as homme, sum(femme) as femme from sexe where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select sum(homme) as homme, sum(femme) as femme from sexe where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select sum(homme) as homme, sum(femme) as femme from sexe where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select sum(homme) as homme, sum(femme) as femme from sexe where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getEtat(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select sum(population_ajoute)  as population_ajoute, sum(carto) as carto, sum(population_carto) as population_carto,  sum(enumere) as enumere, sum(denombre) as denombre, sum(ecart) as ecart, coalesce(round(((sum(denombre)/sum(carto)) * 100), 2), 0) as progression from etat';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select sum(population_ajoute)  as population_ajoute, sum(carto) as carto, sum(population_carto) as population_carto,  sum(enumere) as enumere, sum(denombre) as denombre, sum(ecart) as ecart, coalesce(round(((sum(denombre)/sum(carto)) * 100), 2), 0) as progression from etat where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select sum(population_ajoute)  as population_ajoute, sum(carto) as carto, sum(population_carto) as population_carto,  sum(enumere) as enumere, sum(denombre) as denombre, sum(ecart) as ecart, coalesce(round(((sum(denombre)/sum(carto)) * 100), 2), 0) as progression from etat where  region=:region and dep=:dep group by region, dep  order by region, dep';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select sum(population_ajoute)  as population_ajoute, sum(carto) as carto, sum(population_carto) as population_carto,  sum(enumere) as enumere, sum(denombre) as denombre, sum(ecart) as ecart, coalesce(round(((sum(denombre)/sum(carto)) * 100), 2), 0) as progression from etat where region=:region and dep=:dep and com=:com group by region,dep, com  order by region,dep, com';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select sum(population_ajoute)  as population_ajoute, sum(carto) as carto, sum(population_carto) as population_carto,  sum(enumere) as enumere, sum(denombre) as denombre, sum(ecart) as ecart, coalesce(round(((sum(denombre)/sum(carto)) * 100), 2), 0) as progression from etat where region=:region and dep=:dep and com=:com and zd=:zd  group by region,dep, com, zd  order by region,dep, com, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getRegion(req, res){
        const rows=await sequelize.query("select distinct code_region, libelle_region  from regions order by code_region",{
            replacements: {},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getAllDepartement(req, res){
        const rows=await sequelize.query("select distinct code_region, code_departement, region, departement  from head order by code_region, region,  code_departement, departement",{
            replacements: {},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getAllCommune(req, res){
        const rows=await sequelize.query("select distinct code_region, region, code_departement, code_commune, commune, departement  from head order by   code_departement, departement, code_commune, commune",{
            replacements: {},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getAllZd(req, res){
        const rows=await sequelize.query("select  code_region, code_departement, code_commune, zd  from head order by  code_region, code_departement, code_commune, zd",{
            replacements: {},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getRapportResident(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select  round(((vi/ra)),2) as resident from residence ';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select  round(((vi/ra)),2) as resident from residence  where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select  round(((vi/ra)),2) as resident from residence  where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select  round(((vi/ra)),2) as resident from residence  where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select  round(((vi/ra)),2) as resident from residence  where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getTranche(req, res){
       
        const rows=await sequelize.query("select  sexe, tranche from tranche",{
            replacements: {},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },

    async getTrancheByRegion(req, res){
        
        const rows=await sequelize.query("select region, sexe, tranche from tranche where region=:region group by region",{
            replacements: {region: region},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },

    async getParite(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select  round((sum(n1)/sum(n2)),2) as parite from parite';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select  round((sum(n1)/sum(n2)),2) as parite from parite where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select  round((sum(n1)/sum(n2)),2) as parite from parite where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select  round((sum(n1)/sum(n2)),2) as parite from parite where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select  round((sum(n1)/sum(n2)),2) as parite from parite where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },


    async getProportionCinq(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select round(((sum(n1)*100)/sum(n2)),2)  as proportion_cinq  from proportion_moins_cinq';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select round(((sum(n1)*100)/sum(n2)),2)  as proportion_cinq  from proportion_moins_cinq where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select round(((sum(n1)*100)/sum(n2)),2)  as proportion_cinq  from proportion_moins_cinq where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select round(((sum(n1)*100)/sum(n2)),2)  as proportion_cinq  from proportion_moins_cinq where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select round(((sum(n1)*100)/sum(n2)),2)  as proportion_cinq  from proportion_moins_cinq where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },

    async getMoyenDece(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_dece  from moyen_dece_menage';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_dece  from moyen_dece_menage where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_dece  from moyen_dece_menage where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_dece  from moyen_dece_menage where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_dece  from moyen_dece_menage where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },

    async getMoyenEmigre(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_emigre  from moyen_emigre_menage';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_emigre  from moyen_emigre_menage where  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_emigre  from moyen_emigre_menage where  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_emigre  from moyen_emigre_menage where region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select round((sum(n1)/sum(n2)),2) as moyen_emigre  from moyen_emigre_menage where region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getNbreMenageUnIndividu(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre=1';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre=1 and  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre=1 and  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre=1 and region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre=1 and region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getNbreMenageDixIndividu(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre>10';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre>10 and  region=:region group by region  order by region';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre>10 and  region=:region and departement=:dep group by region, departement  order by region, departement';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre>10 and region=:region and departement=:dep and commune=:com group by region,departement, commune  order by region,departement, commune';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select count(menage) as nbre   from nbre_individu_menage where nbre>10 and region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd  order by region,departement, commune, zd';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getNbreMenageJour(req, res){
        let requete="";
        let p={};
    
        if(req.params.region==0){
            requete='select  date_fin, sum(nbre) as nbre   from nbre_denombre_jour  group by date_fin order by  date_fin';
        }else if(req.params.region > 0 && req.params.dep==0){
            requete='select region, date_fin, sum(nbre) as nbre   from nbre_denombre_jour where region=:region group by region, date_fin order by region, date_fin';
            p={region: req.params.region};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com==0){
            requete='select region, departement, date_fin, sum(nbre) as nbre   from nbre_denombre_jour where   region=:region and departement=:dep group by region, departement, date_fin  order by region, departement, date_fin';
            p={region: req.params.region, dep: req.params.dep};
        }else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd==0){
            requete='select region, departement,commune,  date_fin, sum(nbre) as nbre   from nbre_denombre_jour where   region=:region and departement=:dep and commune=:com group by region,departement, commune, date_fin  order by region,departement, commune, date_fin';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com};
        }
        else if(req.params.region > 0 && req.params.dep>0 && req.params.com>0 && req.params.zd>0){
            requete='select region, departement,commune,zd,  date_fin, sum(nbre) as nbre   from nbre_denombre_jour where  region=:region and departement=:dep and commune=:com and zd=:zd  group by region,departement, commune, zd, date_fin  order by region,departement, commune, zd, date_fin';
            p={region: req.params.region, dep: req.params.dep, com: req.params.com, zd: req.params.zd};
        }

        const rows=await sequelize.query(requete,{
            replacements: p,
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getCommune(req, res){

        const rows=await sequelize.query("select distinct code_commune, commune from head where code_region=:region and code_departement=:dep",{
            replacements: {region: req.params.region, dep:req.params.dep},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getZD(req, res){
        
        const rows=await sequelize.query("select  zd from head where code_region=:region and code_departement=:dep and code_commune=:com",{
            replacements: {region: req.params.region, dep: req.params.dep, com: req.params.com},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    },
    async getPopulationByRegion(req, res){

        const rows=await sequelize.query("select region,  sum(homme) as homme, sum(femme) as femme from sexe  group by region  order by region",{
            replacements: {},
            type: QueryTypes.SELECT
        })
        res.send({rows: rows})
    }
}