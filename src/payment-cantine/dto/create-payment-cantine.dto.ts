import { IsDate, IsMongoId, IsNumber } from "class-validator";

export class CreatePaymentCantineDto {
    @IsNumber()
    annee: number;

    @IsNumber()
    mois: number;

    @IsNumber()
    montant:number;

    @IsMongoId()
    attribution: string;
}
