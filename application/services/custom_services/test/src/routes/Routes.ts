import { Request, Response, NextFunction } from "express";
import { emailController } from '../controller/emailController';


export class Routes {
    private email: emailController = new emailController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/email').post(this.email.GpCreate);
     }

}