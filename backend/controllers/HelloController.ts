import { Request, Response } from "express";
import { EmptyQuery, EmptyParams, HelloResponse } from "../types/hello";

export class HelloController{
    public static getHello = 
    (
        _req: Request<never, EmptyParams, EmptyQuery>, 
        res: Response<HelloResponse>
    ): void => {
        res.status(200).json({message: "Hello !"})
    }
}
