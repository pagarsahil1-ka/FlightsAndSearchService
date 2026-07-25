const{city} = require ('..models/index');
class CityRepository{

async CreateCity({name}){
    try{
    const city= await city.create({name});
    return city;
}
   catch(error){
        console.log("there has been an error")

    throw {error};
   }




}
async DeleteCity(CityId){
    try{
        await city.destroy({
            where:{
            id:city.Id
        }});
        
    }
    catch(error){
        console.log("there has been an error")

        throw {error};
    }
}

async UpdateCity(CityId,data){
    try{
        await city.update(data,{
            where:{
            id:city.Id
        }});
        
    }
    catch(error){
        console.log("there has been an error")

        throw {error};
    }
}




async GetCity(CityId){
    try{
        const city= await CityId.findByPk(CityId);
        return city;
    }
    catch(error){
        console.log("there has been an error")
        throw {error};
    }
}



}

module.export = CityRepository;