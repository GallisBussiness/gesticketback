import { IsBoolean, IsNumber, IsOptional } from "class-validator";

export class CreateCantineDto {
    @IsNumber()
    numero: number;
}
