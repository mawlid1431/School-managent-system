const express = require("express")


const router = express.Router()

let slchool = [
    { id: 1, name: "ahmed cade" },
    { id: 2, name: "salaama" },
    { id: 3, name: "nuuradiin" },
];

//local host
router.get("/", (req, res) => {

    res.render(`schools`, { schools: slchool })

})


//adfrom host
router.get("/addform", (req, res) => {

    res.render("addform")

})


//action   "/school"

router.post("/", (req, res) => {
    console.log(req.body);

    const newschool = req.body
    slchool.push(newschool)
})
module.exports = router;


