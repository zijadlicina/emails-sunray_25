import type { NextFunction, Request, Response } from "express";
import { createOne, getAll } from "../../db/users/blackemails";
import { isEmptyObject } from "../../services/users";

export async function getBlackEmails(req: Request, res: Response, next: NextFunction) {
    try {
        let responseMessage = {}
        const results = await getAll()
        responseMessage = results
        res.json(responseMessage) 
    } catch (error) {
        next(error)
    }
}

export async function createOneBlackEmail(req: Request, res: Response, next: NextFunction) {
    try {
        let responseMessage = {}
        let newBlackEmail = req.body;
        if (!req.body || isEmptyObject(req.body)) {
                const error = new Error("Request body is missing or empty")
                res.statusCode = 400;
                next(error)
        } else{
            
            const results = await createOne(newBlackEmail)
            res.statusCode = 201;
            responseMessage = {results}
        }
        res.json(responseMessage) 
    } catch (error) {
        next(error)
    }
}