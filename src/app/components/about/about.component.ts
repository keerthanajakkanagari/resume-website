import { Component } from '@angular/core';
import { resumedata } from 'src/app/resume-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public sum = resumedata.summary;
}
