import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentProductsPage } from './recent-products.page';

describe('RecentProductsPage', () => {
  let component: RecentProductsPage;
  let fixture: ComponentFixture<RecentProductsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
