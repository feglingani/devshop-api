import { Category } from './category.entity';
import { CategoryCreateInput } from './dto/category-create.input';

export class CategoryMapper {
  public static toEntity(input: CategoryCreateInput): Category {
    const categoryEntity = new Category();
    categoryEntity.name = input.name;
    categoryEntity.slug = input.slug;
    return categoryEntity;
  }
}
