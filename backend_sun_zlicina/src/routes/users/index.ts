import {Router, Requst, Response} from "express"
import emails from "./emails"
import blackEmails from "./blackemails"

export default ({router}: {router: Router}) => {
    router.use("/emails", emails())
    router.use("/blackemails", blackEmails())
    return router;
}