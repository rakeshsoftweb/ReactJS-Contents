import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { ClientSchema, Client } from './Client.Schema';
import { ClientDTO } from './ClientDTO';
@Injectable()
export class ClientService {
    constructor(@InjectModel(Client.name) private readonly clientModel: Model<typeof ClientSchema>) { }

    async getAllClient() {
        return this.clientModel.find().exec();
    }
    async getClient(cid: string) {
        const Result = await this.clientModel.findOne({ _id: cid }).exec();
        return Result;
    }
    async deleteClient(id: string) {
        const Result = await this.clientModel.findByIdAndRemove({ _id: id }).exec();
        return Result;
    } 
    async createClient(clientDto: ClientDTO) {
        return await this.clientModel.create(clientDto)
    }
    async update(id:string, clientDto: ClientDTO) {
        const updateClient = {$set : {clientname:clientDto.clientname,address:clientDto.address, city:clientDto.city, phone:clientDto.phone }};
        return await this.clientModel.findByIdAndUpdate({_id:id},updateClient).exec();
    }
}
