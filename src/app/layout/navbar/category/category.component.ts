import { Component, inject, OnInit } from '@angular/core';
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
export class CategoryComponent implements OnInit{
 ngOnInit(): void {
  this.fetchAllcategories();
 }

 categoryService = inject(CategoryService);

 categories:Category[] | undefined;

 currentActiveCategory = this.categoryService.getCategoryByDefault();

 private fetchAllcategories() {
  this.categories = this.categoryService.getCategories();
 }

}
