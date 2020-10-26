import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  fg : FormGroup;
  constructor(private formGroup: FormGroup) {
    console.log("Constructor created");
    this.formGroup.
  }

  ngOnInit() {
    console.log("NgOnInit called");
  }
}
