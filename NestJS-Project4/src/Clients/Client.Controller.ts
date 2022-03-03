import { Controller, Get, Param, Post, Body, Delete, Put } from "@nestjs/common";
import { ClientService } from './Client.Service';
import { ClientDTO } from './ClientDTO';
import { Client } from './Client.Schema';
@Controller('/client')
export class ClientController{
    constructor(private clientService : ClientService){}

    @Post()
    async create(@Body() createClientDTO : ClientDTO) {
        const Result:any = await this.clientService.createClient(createClientDTO);
        return Result.clientname + " has been Insert Successfully"
    }

    @Delete(':id')
    async deleteClient(@Param('id') id:string) {
        return this.clientService.deleteClient(id);
    }
    @Get()
    async getAllClient(){
        return this.clientService.getAllClient();
    }
    @Get(':cid')
    async getClient(@Param('cid') cid:string){
        return this.clientService.getClient(cid);
    }

    @Put(':id')
    async update(@Body() updateClientDto: ClientDTO, @Param('id') id:string)
    {
        return this.clientService.update(id, updateClientDto)
    }

}