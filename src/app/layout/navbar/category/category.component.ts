import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

 categoryService:CategoryService = inject(CategoryService);

 categories:Category[] | undefined;

 currentActiveCategory : Category = this.categoryService.getCategoriesByDefault();

 OnInit(): void {
  this.fetchAllcategories();
 }

 private fetchAllcategories() {
  this.categories = this.categoryService.getCategories();
 }

}
