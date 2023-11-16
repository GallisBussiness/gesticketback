import { IsDate, IsDateString, IsMongoId, IsNumber, IsObject, IsString } from "class-validator";

export class CreateProductionDto {
    @IsDateString()
    date: string;

    @IsObject()
    matin:object;

    @IsObject()
    soir:object;

    @IsString()
    designation: string;
    
    @IsNumber()
    quantite: number;

    @IsString()
    observation: string;

    @IsMongoId()
    decadaire: string;
}
