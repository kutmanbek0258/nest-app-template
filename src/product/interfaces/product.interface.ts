import { Document } from "mongoose";

export interface Product extends Document {
    name: String,
    description: String,
    barcode: String,
    product_code: String,
    manufacturer: String,
    system_code: String,
    normal_quality: Number
}
