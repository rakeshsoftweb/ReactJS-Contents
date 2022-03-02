import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { ClientSchema } from './Client.Schema';
import { ClientDTO } from './ClientDTO';
@Injectable()
export class ClientService {
    constructor(@InjectModel('Client') private readonly clientModel : Model<typeof ClientSchema>) { }

    async getAllClient() {
        const Result  = await this.clientModel.find().exec();
        console.log(Result);
        return Result;
    }

    async deleteClient(id:string)
    {
        const Result = await this.clientModel.findByIdAndRemove({_id:id}).exec();
        return Result;
    }
    async getClient(cid:string)
    {
        const Result = await this.clientModel.findOne({_id:cid}).exec();
        return Result;
    }

    async createClient(clientDto: ClientDTO)
    {
        return await this.clientModel.create(clientDto)
    }
}