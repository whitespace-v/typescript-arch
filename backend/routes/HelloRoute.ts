import {Router, type Router as ExpressRouter} from 'express'
import { HelloController } from '../controllers/HelloController'

export class HelloRoute{
    public readonly router: ExpressRouter = Router()
    
    constructor() {
        this.initializeRoutes()
    }
    private initializeRoutes(): void {
        this.router.get('/api/hello', HelloController.getHello)
    }
}