import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatriceComponentComponent } from './calculatrice-component.component';

describe('CalculatriceComponentComponent', () => {
  let component: CalculatriceComponentComponent;
  let fixture: ComponentFixture<CalculatriceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatriceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatriceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
