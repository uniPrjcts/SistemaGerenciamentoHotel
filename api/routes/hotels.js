import express from "express";
import { atualizarHotel, criarHotel, deletarHotel, getHoteis, getHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Criar hotel
router.post("/", verifyAdmin, criarHotel);
// Atualizar hotel
router.put("/:id", verifyAdmin, atualizarHotel);
// Deletar hotel
router.delete("/:id", verifyAdmin, deletarHotel);
// Get Hotel
router.get("/:id", getHotel);
// Get todos hoteis
router.get("/", getHoteis);

export default router;
