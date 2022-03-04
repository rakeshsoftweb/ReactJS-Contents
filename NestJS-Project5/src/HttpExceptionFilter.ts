import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter
{
    catch(exception : HttpException, host: ArgumentsHost)
    {
        const argshost = host.switchToHttp();
        const httpResponse = argshost.getResponse();
        const httpRequest = argshost.getRequest();    
        const status =  exception.getStatus();        
        const jsonBody = {statusCode:status, errlogdttime: new Date(), path:httpRequest.url};
        httpResponse
        .status(status)
        .json(jsonBody)
    }
}