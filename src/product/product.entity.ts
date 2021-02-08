import { Category } from 'src/category/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30, nullable: false })
  name: string;

  @Column({ length: 900, nullable: false })
  description: string;

  @Column({ length: 255, nullable: false })
  slug: string;

  @ManyToOne(type => Category, category => category.id)
  category: Category;
}

export default Product;
