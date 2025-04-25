import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { resumedata } from 'src/app/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public exp = resumedata.experience;
}
