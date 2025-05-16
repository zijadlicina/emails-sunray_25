import { Router } from "express";
import { blackEmailController } from "../../controllers";

export default () => {
    const router = Router()
    router.get("/", blackEmailController.getBlackEmails);
    router.post("/", blackEmailController.createOneBlackEmail);
    return router;
}