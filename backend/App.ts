import express, {type Express} from 'express'
import { HelloRoute } from './routes/HelloRoute'
import cors, { CorsOptions } from 'cors'

export class App {
    private readonly app: Express
    private readonly port: number

    constructor(port: number) {
        this.app = express()
        this.port = port
        this.initRoutes()
        this.initMiddlewares()
    }

    private initRoutes(): void {
        this.app.use(new HelloRoute().router)
    }
    private initMiddlewares(): void {
        const corsOptions: CorsOptions = {
            origin: "*"
        }
        this.app.use(cors(corsOptions))
    }
    public listen():void {
        this.app.listen(
            this.port, 
            (): void => console.log("Server running on", this.port)
        )
    }
}