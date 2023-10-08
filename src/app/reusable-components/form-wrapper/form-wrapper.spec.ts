import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormWrapperComponent } from "./form-wrapper.component";

describe("FormWrapperComponent", () => {
  let fixture: ComponentFixture<FormWrapperComponent>;
  let component: FormWrapperComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormWrapperComponent],
    });

    fixture = TestBed.createComponent(FormWrapperComponent);
    component = fixture.componentInstance;
  });

  it("should create the form wrapper component", () => {
    expect(component).toBeInstanceOf(FormWrapperComponent);
  });
});
