const express = require('express');

const router = express.Router();


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


module.exports = router;