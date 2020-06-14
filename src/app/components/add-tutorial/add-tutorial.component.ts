import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    image:'',
    published: false,
    created_at:''
  };
  submitted = false;
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }
  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      image: this.tutorial.image,
      created_at: this.tutorial.created_at
    };
    this.tutorialService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
      image:'',
      created_at:''

    };
  }
}
