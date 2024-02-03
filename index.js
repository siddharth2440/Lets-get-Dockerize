import 'dotenv'
import express from "express";
const app = express();
const PORT = 4004 || process.env.PORT;

app.route('/').get((req,res)=>res.json({message:"Hey is this going to be Fun"}));
app.listen(PORT , ()=>console.log(`Server is listening on the ${PORT}`));