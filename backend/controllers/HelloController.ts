import { Request, Response } from "express";
import { EmptyQuery, HelloReponse } from "../types/hello";

export class HelloController{
    public static getHello = 
    (
        _req: Request<never, HelloReponse, EmptyQuery>, 
        res: Response<HelloReponse>
    ): void => {
        res.status(200).json({message: "Hello !"})
    }
}