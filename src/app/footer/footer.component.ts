import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isFooter : boolean = true;
  message : string = "Learn about time and dates with the Introvert's Guide!"
}
