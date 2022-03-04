import { Controller, Get, HttpException, Param } from "@nestjs/common";
@Controller('/webapp')
export class WebappController{
    constructor(){}
   
    @Get(':id')
    async getWebApp(@Param('id') webid : any){
        if(webid>0)
        {
            console.log("valid")
        } else 
        {
            console.log("invalid value");
            throw new HttpException("web id is not valid",400);
        }
        
        return "this web app controller";
    }   
}