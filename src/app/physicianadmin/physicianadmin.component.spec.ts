import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianadminComponent } from './physicianadmin.component';

describe('PhysicianadminComponent', () => {
  let component: PhysicianadminComponent;
  let fixture: ComponentFixture<PhysicianadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
