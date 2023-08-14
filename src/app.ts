import express, { Application } from 'express'
import { serverPort } from './util/config'
import * as SyncModels from './models/SyncModels'
import path from 'path'
import { websiteRouter } from './routes/websiteRouter'
import bodyParser from 'body-parser';
 
/* เปิด SyncModels เมื่อเปลี่ยนแปลง Database Structure */
SyncModels.OnInit()

const app: Application = express()
app.use(express.static(path.join(__dirname, './../dist/public/')))

/*  -------- converting json -------- */  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/* Middleware */
app.use((req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*' )
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers',  "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
})
  
app.use(websiteRouter)

app.use("/test", (req:any, res:any) => { 
    res.status(200).json({message: "ok"}) 
})

app.listen(serverPort)