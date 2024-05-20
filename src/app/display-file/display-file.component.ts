import {Component, OnInit} from '@angular/core';
import {GenericService} from "../generic.service";
import {File} from "../File";

@Component({
  selector: 'app-display-file',
  templateUrl: './display-file.component.html',
  styleUrl: './display-file.component.css'
})
export class DisplayFileComponent implements OnInit{
  files : File[] = []

  constructor(private service : GenericService) {}

  ngOnInit() {
    console.log("called ng OnInit")
    this.getFiles();
  }

  getFiles() {
    this.service.fetchFiles().subscribe(files => this.files = files);
  }

}
