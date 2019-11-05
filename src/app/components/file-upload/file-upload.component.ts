import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  uploadedFiles = [];
  value = 100;
  display = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  myUploader() {
    this.display = true;
    this.upload();
  }

  upload() {
    this.value = 20;
    let second = 5;
    let currentSecond = 0;
    let timer = setInterval(() => {
      if (currentSecond >= second) {
        clearInterval(timer);
        currentSecond = 0;
        this.display = false;
        this.router.navigateByUrl('/skill-map');
      } else {
        currentSecond += 0.1;
        let ceilTime = Math.ceil(currentSecond * 20);
        if(ceilTime > 80){
          this.value = 100;
        } else if(ceilTime > 60){
          this.value = 80;
        } else if(ceilTime > 40){
          this.value = 60;
        } else if(ceilTime > 20){
          this.value = 40;
        }
      }
    }, 100);
  }
}
