import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMenuComponent } from './side-nav-menu.component';

describe('SideNavMenuComponent', () => {
  let component: SideNavMenuComponent;
  let fixture: ComponentFixture<SideNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
