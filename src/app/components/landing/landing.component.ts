import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { resumedata } from 'src/app/resume-data';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { jsPDF } from 'jspdf';  

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, NotificationsComponent, AboutComponent,ExperienceComponent,EducationComponent,ProjectsComponent,SkillsComponent,CertificatesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  public resumeUrl!: SafeResourceUrl;
  public emailId = resumedata.email;
  public selectedSection: string = '';
  public showPreview = false;
  public pdfLoading = false;
  public showModal = false;
  public sendingEmail = false;
  public notificationMessage = '';
  public notificationType: 'success' | 'error' = 'success';
  // public activeSection: string = '';
  public formData = {
    name: '',
    email: '',
    message: '',
  };


  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  public showContent(str: string) {
    this.selectedSection = str;
    this.router.navigate([this.selectedSection]);
  }

  public openPreview() {
    this.showPreview = true;
    this.pdfLoading = true;
    this.http
      .get('assets/7_Resume_KJ.pdf', { responseType: 'blob' })
      .subscribe((blob) => {
        const url = URL.createObjectURL(blob);
        this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.pdfLoading = false;
      });
  }

  public downloadResume() {
    const doc = new jsPDF();
    this.http
      .get('assets/7_Resume_KJ.pdf', { responseType: 'blob' })
      .subscribe((blob) => {
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        link.href = url;
        link.download = 'Resume_Keerthana.pdf';
        link.click();
        window.URL.revokeObjectURL(url);
      });
  }

  public scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  

  public closePreview() {
    this.showPreview = false;
  }

  public onPdfLoad() {
    this.pdfLoading = false;
  }

  public openMessageDialog() {
    this.showModal = true;
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }

  public closeModal() {
    this.showModal = false;
  }

  public isButtonDisabled() {
    if (
      this.formData.name &&
      this.formData.email &&
      this.formData.message &&
      !this.sendingEmail
    ) {
      return false;
    }
    return true;
  }

  public sendEmail() {
    this.sendingEmail = true;
    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
    };

    emailjs
      .send(
        'service_vu33bgc',
        'template_wgu7ts6',
        templateParams,
        'BRL8ui1rSYfWEmvrb'
      )
      .then(
        (response) => {
          this.sendingEmail = false;
          this.notificationMessage = 'Email sent successfully!';
          this.notificationType = 'success';
          this.closeModal();
        },
        (error) => {
          this.sendingEmail = false;
          this.notificationMessage = 'Email failed to send.';
          this.notificationType = 'error';
          console.error('EmailJS error:', error);
        }
      );
  }
}
