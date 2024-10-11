import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  hasFocus = false;


  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.articleForm = this.fb.group({

      title: ['', Validators.required],
      tag: [''],
      description: ['', Validators.required],
      content: ['', Validators.required],
      file: [null]
    });
  }

  ngOnInit(): void { }

  addTag() {
    const tags = this.articleForm.get('tag')?.value;
    console.log('Tags added:', tags);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.articleForm.patchValue({ file: file });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Article Submitted', this.articleForm.value);
    }
  }

  toggleFocus() {
    this.hasFocus = !this.hasFocus;
  }
}
