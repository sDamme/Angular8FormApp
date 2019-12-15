import { Component, OnInit} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { Topic } from "./topic.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder){ }
  
  ngOnInit(){
    // Assign fields to our form myForm
    this.myForm = this._fb.group({
      //added optional validator where minimum of 5 characters is required
      title: ['', [Validators.required, Validators.minLength(5)]],
      info: [''],
      // added array to keep our sub-topics in
      subtopics: this._fb.array([])
    });

    // add address
    this.addSubTopic();

    /* subscribe to subtopics value changes */
      // this.myForm.controls['subtopics'].valueChanges.subscribe(x => {
      //   console.log(x);
      // })
  }


  initSubTopic(){
    // assignable function to create a FormGroup instance with values of our subtopic array
    return this._fb.group({
      subTitle: [''],
      subInfo: ['']
    });
  }

  addSubTopic(){
    // assign our FormArray of subtopics to a constant
    const ourArray = <FormArray>this.myForm.controls['subtopics'];

    // assign our function to a constant, which returns a sub-topic array
    const addSubform = this.initSubTopic();

    // add our empty sub-topic array to our FormArray array
    ourArray.push(addSubform);

    /* subscribe to individual subtopic value changes */
    // addCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  // function takes index from FormArray group index
  removeSubTopic(i: number) {

    // assign our FormArray of subtopics to a constant
    const ourArray = <FormArray>this.myForm.controls['subtopics'];

    // FormArray has special method removeAt to simply delete groups with given index
    ourArray.removeAt(i);
  }

  save(model: Topic) {
      // call API to save and apply type safety to the parameter
      // ...
      console.log(model);
  }

}
