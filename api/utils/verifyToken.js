import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return next(createError(401, "Você não está autenticado!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403, "Token inválido!"));
        req.user = user;
        next();
    });
};

// Somente o próprio usuário e o admin podem deletar sua conta.
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            if(err) return next(createError(403, "Usuário não autorizado!"));
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            if(err) return next(createError(403, "Usuário não autorizado!"));
        }
    });
};
