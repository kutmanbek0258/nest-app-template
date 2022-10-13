import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>
  ){}

  async create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);
    return await newProduct.save();
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
