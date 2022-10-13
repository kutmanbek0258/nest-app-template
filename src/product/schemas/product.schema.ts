import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema ({
    name: {
        type: String,
        minLentgh: 3,
        maxLength: 3000,
        required: [true, 'NAME_IS_BLANK']
    },

    description: {
        type: String,
        minLength: 3,
        maxLength: 5000
    },

    barcode: {
        type: String
    },

    product_code: {
        type: String,
        required: [true, 'PRODUCT_CODE_IS_BLANK']
    },

    manufacturer: {
        type: String
    },

    system_code: {
        type: String
    },

    normal_quality: {
        type: Number
    }
})