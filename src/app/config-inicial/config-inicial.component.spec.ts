import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigInicialComponent } from './config-inicial.component';

describe('ConfigInicialComponent', () => {
  let component: ConfigInicialComponent;
  let fixture: ComponentFixture<ConfigInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
