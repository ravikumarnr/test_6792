import * as mongoose from 'mongoose';
import emailModel from '../models/email';
import { CustomLogger } from '../config/Logger'


export class emailDao {
    private email = emailModel;
    constructor() { }
public GpCreate(emailData, callback){
new CustomLogger().showLogger('info', 'Enter into emailDao.ts: GpCreate')
let temp = new emailModel(emailData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from emailDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}