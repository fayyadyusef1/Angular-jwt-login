import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  linkedinUrl: string = 'https://www.linkedin.com/company/company/mycompany/';
  emailUs:string = 'mailto:info@company.com.de';
  facebookUrl:string = 'https://www.facebook.com/company.sy';
  companyWebsite:string = 'https://www.company.sy';

}
