import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesJsonComponent } from './recipes-json.component';

describe('RecipesJsonComponent', () => {
  let component: RecipesJsonComponent;
  let fixture: ComponentFixture<RecipesJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
