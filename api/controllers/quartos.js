import Quarto from "../models/Quarto.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const criarQuarto = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const novoQuarto = new Quarto(req.body);

    try {
        const quartoSalvo = await novoQuarto.save();
        try {
            await Hotel.findByIdAndUpdate(
                hotelId,
                {$push: { quartos: quartoSalvo._id }},
                { new: true});
        } catch (err) {
            next(err);
        }
        res.status(200).json(quartoSalvo);
    } catch (err) {
        next(err);
    }
};

export const atualizarQuarto = async (req, res, next) => {
    try {
        const quartoAtualizado = await Quarto.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(quartoAtualizado);
    } catch (error) {
        next(err);
    }
};

export const deletarQuarto = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Quarto.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {quartos: req.params.id}});
        } catch (err) {
            next(err);
        }
        res.status(200).json("Quarto deletado com sucesso.");
    } catch (error) {
        next(err);
    }
};

export const getQuarto = async (req, res, next) => {
    try {
        const quarto = await Quarto.findById(req.params.id);
        res.status(200).json(quarto);
    } catch (error) {
        next(err);
    }
};

export const getQuartos = async (req, res, next) => {
    try {
        const quartos = await Quarto.find();
        res.status(200).json(quartos);
    } catch (error) {
        next(err);
    }
};
