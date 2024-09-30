import mongoose from "mongoose";

const ReservaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quartoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quarto',
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Reserva', ReservaSchema);
