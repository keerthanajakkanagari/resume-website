import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { resumedata } from 'src/app/resume-data';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  public certifications = resumedata.certifications;
}
