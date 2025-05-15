import { Router } from "express";
import usersRoutes from "./users";

export default () => {
    const router = Router();    
    router.use("/users", usersRoutes({router}))
    return router;
} 