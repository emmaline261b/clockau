import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isFooter : boolean = true;
  message : string = "2023 | The Introvert's Guide | All Rights Reserved."
}
