const {Router}=require("express");
const router=Router()

const {getreq,postreq}=require('../controllers/bfhl_controller');

router.get('/bfhl',getreq);
router.post('/bfhl',postreq)

module.exports=router;