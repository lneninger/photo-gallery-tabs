import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryPage } from './recipe-details.page';

describe('Tab1Page', () => {
  let component: MenuCategoryPage;
  let fixture: ComponentFixture<MenuCategoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCategoryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
