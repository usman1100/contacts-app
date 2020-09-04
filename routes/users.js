const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check')


//@ route GET
//@ des ---
//@ access PUBLIC
router.get("/", (req, res)=>{
    res.json("users",["user 1", "user 2", "user 3", "user 4" ])
})

router.get("/:id", (req, res)=>{
    res.json({"id-number":req.params.id});
})

router.get("/page/:num", (req, res)=>{

    let num = req.params.num;
    res.json({"page-number":num});
    
})

router.post("/new",
[
    check("name", "name required").not().isEmpty(),
    check("password", "password must be 6 characters or more").isLength({min:6})

], (req, res)=>{
    const err = validationResult(req);
    
    if(!err.isEmpty()){
        return res.status(400).json({error:err})
    }
    res.json(req.body.name+"|"+req.body.password);
})

module.exports = router;