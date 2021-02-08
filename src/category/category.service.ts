import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findById(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async create(input: Category): Promise<Category> {
    return this.categoryRepository.save(input);
  }

  async update(input: Category): Promise<Category> {
    await this.categoryRepository.update(input.id, {
      name: input.name,
      slug: input.slug
    });
    return input;
  }

  async delete(id: string): Promise<boolean> {
    try {
      this.categoryRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}