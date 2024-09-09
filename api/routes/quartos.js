import express from "express";
import { atualizarQuarto, criarQuarto, deletarQuarto, getQuarto, getQuartos } from "../controllers/quartos.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Criar hotel
router.post("/:hotelid", verifyAdmin, criarQuarto);
// Atualizar hotel
router.put("/:id", verifyAdmin, atualizarQuarto);
// Deletar hotel
router.delete("/:id/:hotelid", verifyAdmin, deletarQuarto);
// Get Hotel
router.get("/:id", getQuarto);
// Get todos hoteis
router.get("/", getQuartos);

export default router;
