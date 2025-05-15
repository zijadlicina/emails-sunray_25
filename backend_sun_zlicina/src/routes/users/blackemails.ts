import { Router } from "express";
import { blackEmailController } from "../../controllers";
import { emailController } from "../../controllers";

export default () => {
    const router = Router()
    router.get("/", blackEmailController.getAuthorsForBook);
    router.post("/:id", blackEmailController.getAuthorsForBook);
    return router;
}