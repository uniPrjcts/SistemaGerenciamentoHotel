import mongoose from "mongoose";

const QuartoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    capacidade: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    numeros_quartos: [{numero: Number, datasOcupado: {type: [Date]}}],
},
{timestamps: true});

export default mongoose.model("Quarto", QuartoSchema);
