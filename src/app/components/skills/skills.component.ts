import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { resumedata } from 'src/app/resume-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public skills = resumedata.skills;

  skillIcons: { [key: string]: string } = {
    'JavaScript': 'fab fa-js',
    'AngularJS': 'fab fa-angular',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'Bootstrap': 'fab fa-bootstrap',
    'D3.js': 'fas fa-chart-line',
    'NgRx': 'fas fa-code-branch',

    'Core Java': 'fab fa-java',
    'OOPs': 'fas fa-cubes',
    'Spring Framework': 'fas fa-leaf',
    'Spring Boot': 'fas fa-seedling',
    'DBMS': 'fas fa-database',
    'SQL': 'fas fa-table',
    'Spring Data JPA': 'fas fa-code',
    'Spring Security': 'fas fa-shield-alt',

    'Maven': 'fas fa-cogs',
    'Node.js': 'fab fa-node-js',
    'Docker': 'fab fa-docker',
    'Git': 'fab fa-git-alt',
    'Jenkins': 'fas fa-robot',
    'CI/CD': 'fas fa-sync-alt',
    'Kubernetes': 'fas fa-project-diagram',

    'Collaboration': 'fas fa-users',
    'Attention to Detail': 'fas fa-eye',
    'Creativity': 'fas fa-lightbulb',
    'Time Management': 'fas fa-clock',
    'Team Player': 'fas fa-handshake',
    'Debugging': 'fas fa-bug',
  };

  getIcon(skill: string): string {
    return this.skillIcons[skill] || 'fas fa-circle';
  }

}
