import { Controller, Get, Param, Post, Body, Delete } from "@nestjs/common";
import { ClientService } from './Client.Service';
import { ClientDTO } from './ClientDTO';
@Controller('/client')
export class ClientController{
    constructor(private clientService : ClientService){}

    @Post()
    async create(@Body() createClientDTO : ClientDTO) {
        this.clientService.createClient(createClientDTO);
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
}