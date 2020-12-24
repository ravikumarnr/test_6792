
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const emailSchema = new Schema({
   email: String,
   Enter_Name: String
})

const emailModel = mongoose.model('email', emailSchema, 'email');
export default emailModel;
