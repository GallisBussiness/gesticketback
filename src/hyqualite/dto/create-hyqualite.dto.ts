import { IsMongoId, IsObject, IsString } from "class-validator";

export class CreateHyqualiteDto {

 @IsString()
 date: Date;

 @IsString()
 restaut: string;

 @IsObject({each:true})
 petitDej: object;

 @IsObject({each:true})
 dejeuner: object;

 @IsObject({each:true})
 diner: object;

 @IsMongoId()
 decadaire: string;
}
