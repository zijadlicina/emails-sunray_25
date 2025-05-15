import { Router } from "express";
import { emailController } from "../../controllers";

export default () => {
    const router = Router()
    router.get("/", emailController.getAllEmails);
    router.post("/", emailController.createOneEmail);
    return router;
}