import express, {type Express, type Request, type Response} from 'express'
import cors, {type CorsOptions} from 'cors'

const app: Express = express()

const corsOptions: CorsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))

type EmptyParams = Record<string, never>
type EmptyQuery= Record<string, never>
type HelloResponse = {
    message: string
}
app.get(
    '/api/hello', 
    (_req: Request<EmptyParams, never, EmptyQuery>, res: Response<HelloResponse>): void => {
    res.json({message: "Hello !"})
})

app.listen(3000, (): void => {
    console.log("Server running on ", 3000);
})
// route: http://localhost:3000/api/hello