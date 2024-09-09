import Hotel from "../models/Hotel.js";

export const criarHotel = async (req, res, next) => {
    const novoHotel = new Hotel(req.body);

    try {
        const hotelSalvo = await novoHotel.save();
        res.status(200).json(hotelSalvo);
    } catch (error) {
        next(err);
    }
};

export const atualizarHotel = async (req, res, next) => {
    try {
        const hotelAtualizado = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(hotelAtualizado);
    } catch (error) {
        next(err);
    }
};

export const deletarHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deletado com sucesso.");
    } catch (error) {
        next(err);
    }
};

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        next(err);
    }
};

export const getHoteis = async (req, res, next) => {
    try {
        const hoteis = await Hotel.find();
        res.status(200).json(hoteis);
    } catch (error) {
        next(err);
    }
};
