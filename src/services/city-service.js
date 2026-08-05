const { CityRepository }= require('../repository/index');

class CitySevice{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    
    async createCity(data){
    try{
    const city= await this.cityRepository.createCity(data);
    return city;
}
   catch(error){
        console.log("there has been an error")

    throw {error};
   }

}
async deleteCity(cityId){
    try{
        const response= await this.cityRepository.deleteCity(cityId);
        return response;
    }
    catch(error){
        console.log("there has been an error")

        throw {error};
    }
}

async updateCity(cityId,data){
    try{
    const city= await this.cityRepository.updateCity(cityId,data);
    return city;}
    catch(error){
        console.log("there has been an error")

        throw {error};
    }
}




async getCity(cityId){
    try{
        const city= await this.cityRepository.getCity(cityId);
        return city;
    }
    catch(error){
        console.log("there has been an error")
        throw {error};
    }
}











}
module.exports = CityService;