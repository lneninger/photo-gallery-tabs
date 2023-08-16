import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoriesPage } from './menu-categories.page';

describe('Tab1Page', () => {
  let component: MenuCategoriesPage;
  let fixture: ComponentFixture<MenuCategoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCategoriesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
