import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['../recipe-edit/recipe-edit.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryName = '';

  constructor() { }

  ngOnInit() {
  }

  submitForm(): void {
    console.log(this.categoryName);
  }

}
