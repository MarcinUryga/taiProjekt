import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  car: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      debugger;
      const temp = params['id '];

      console.log(params, temp);
      console.log('chuju dzialaj! ' + temp.id);
      // if (id) {
      //   this.carService.get(id).subscribe((car: any) => {
      //     if (car) {
      //       this.car = car;
      //       this.car.href = car._links.self.href;
      //       this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      //     } else {
      //       console.log(`Car with id '${id}' not found, returning to list`);
      //       this.gotoList();
      //     }
      //   });
      // }
    });
  }
}
