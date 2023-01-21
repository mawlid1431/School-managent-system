const express = require(`express`)
// const router = require("./routes/schools")
const schoolRoutes = require(`./routes/schools`)

const homerouter = require("./routes/home")



const app = express()
app.set(`view engine`, `ejs`)
app.listen(2000)
console.log(`my sever is running..`);

///midlle ware


app.use(express.static("public"))


app.use(express.urlencoded({ extended: true }))


//routes wxa loo iscticmalaya use

app.use("/", homerouter)  //home taoute
app.use("/schools", schoolRoutes);  //school route
// app.use("/student") // student ruoutes

