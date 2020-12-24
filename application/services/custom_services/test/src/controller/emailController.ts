import { Request, Response } from 'express';
import { emailService } from '../service/emailService';
import { CustomLogger } from '../config/Logger'
let email = new emailService();

export class emailController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
email.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into emailController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from emailController.ts: GpCreate');
    })}


}