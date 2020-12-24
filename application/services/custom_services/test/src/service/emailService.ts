import { Request, Response } from 'express';
import {emailDao} from '../dao/emailDao';
import { CustomLogger } from '../config/Logger'
let email = new emailDao();

export class emailService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into emailService.ts: GpCreate')
     const  emailData = req.body;
     email.GpCreate(emailData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from emailService.ts: GpCreate')
         callback(response);
         });
    }


}