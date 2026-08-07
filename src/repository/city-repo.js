const{City} = require ('../models');
class CityRepository{

async createCity({name}){
    try{
    const newCity= await City.create({name});
    return newCity;
}
   catch(error){
        console.log("there has been an error")

    throw error;
   }

}
async deleteCity(CityId){
    try{
        await City.destroy({
            where:{
            id:cityId
        }});
        
    }
    catch(error){
        console.log("there has been an error")

        throw {error};
    }
}

async updateCity(CityId,data){
    try{
        await City.update(data,{
            where:{
            id:cityId
        }});
        
    }
    catch(error){
        console.log("there has been an error")

        throw {error};
    }
}

async getCity(CityId){
    try{
        const City= await City.findByPk(CityId);
        return city;
    }
    catch(error){
        console.log("there has been an error")
        throw {error};
    }
}

async getAllCities(){
    try{
        const cities = await City.findAll();
        return cities;
    }
    catch(error){
        console.log("there has been an error")
        throw {error};
    }
}


}

module.exports = CityRepository;