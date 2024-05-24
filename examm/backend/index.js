import express from 'express'
import "./src/config/db.js"
import { productrouter } from './src/routers/productRouter.js';
import "dotenv/config"
import cors from "cors"
const app = express()
const port = 3000
app.use(cors())

// app.use(json())
app.use(express.json())
// app.use(bodyParser())
app.use('/api/products' , productrouter)



// mongoose.connect('mongodb+srv://mi7rtfggj:123@bilet2.xstffm0.mongodb.net/exam')
//   .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})