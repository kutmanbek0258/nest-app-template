import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(25)
    readonly name: string;

    readonly description: string;

    readonly barcode: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    readonly product_code: string;

    readonly manufacturer: string;

    readonly system_code: string;

    @IsNotEmpty()
    @IsNumber()
    readonly normal_quality: number;

}
