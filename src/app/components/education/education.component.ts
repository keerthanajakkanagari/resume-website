import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { resumedata } from 'src/app/resume-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  public education = resumedata.education;

}
