/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Res, HttpStatus, Response } from '@nestjs/common';

export class AppResponse {
    static ok(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.OK).json({
            "values": values,
            "message": message
        })
    }

    static badRequest(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.BAD_REQUEST).json({
            "values": values,
            "message": message
        })
    }
}