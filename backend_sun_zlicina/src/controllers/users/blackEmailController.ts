import type { NextFunction, Request, Response } from "express";


export async function getAuthorsForBook(req: Request, res: Response, next: NextFunction) {
    try {
        console.log("dasda")
        let responseMessage = {}
        const idBook = req.params.id;
        const results = ["black1", "black2"]
        if (!results) {
            res.statusCode = 404;
            responseMessage = {message: "Not found book"}
        } else if (results.length === 0) responseMessage = {message: "This book don't have author"}
        else responseMessage = results
        res.json(responseMessage) 
    } catch (error) {
        next(error)
    }
}