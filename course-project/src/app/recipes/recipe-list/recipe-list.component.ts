import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza", "Delicious pizza pie", "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg?output-quality=60&resize=1000:*"),
    new Recipe("Steak", "Succulent steak", "https://media1.s-nbcnews.com/j/newscms/2018_07/1318715/grilled-steak-today-tease-180216_89508b219dd455b4d43311782841f938.today-inline-large.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
