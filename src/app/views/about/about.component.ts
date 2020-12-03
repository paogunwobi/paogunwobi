import { Component, OnInit } from '@angular/core';
// import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pdfUrl = '';
  pdfName = '';


  constructor() { }

  ngOnInit(): void {
    this.pdfUrl = '/assets/Resume.pdf';
    this.pdfName = 'resume.pdf';
  }

  downloadPdf(): void {
    const pdfUrl = '/assets/Resume.pdf';
    const pdfName = 'myResume';
    // FileSaver.saveAs(pdfUrl, pdfName);
  }

}
