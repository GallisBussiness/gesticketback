import { IsMongoId, IsString } from "class-validator";

export class CreateAttributionDto {
    @IsString()
    date: string;

    @IsString()
    prenom_proprietaire: string;

    @IsString()
    nom_proprietaire: string;

    @IsString()
    tel_proprietaire: string;

    @IsString()
    nin_proprietaire: string;

    @IsMongoId()
    cantine: string;
}
