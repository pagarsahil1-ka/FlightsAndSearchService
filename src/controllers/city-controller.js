const { CityService } = require('../services');

const cityService = new CityService();

// POST -> /city
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);

        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        });

    } catch (error) {
    console.log("FULL ERROR:");
    console.dir(error, { depth: null });

    return res.status(500).json({
        success: false,
        err: String(error)
    });
}
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);

        return res.status(200).json({
            data: response,
            success: true,
            message: "City deleted successfully",
            err: {}
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete city",
            err: error
        });
    }
};

// PATCH -> /city/:id
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);

        return res.status(200).json({
            data: response,
            success: true,
            message: "City updated successfully",
            err: {}
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update city",
            err: error
        });
    }
};

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);

        return res.status(200).json({
            data: response,
            success: true,
            message: "City fetched successfully",
            err: {}
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch city",
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        

        return res.status(200).json({
            data: cities,
            success: true,
            message: "City fetched successfully",
            err: {}
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch city",
            err: error
        });
    }
};






module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};