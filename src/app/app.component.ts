import { Component } from '@angular/core';
import { GoogleTranslateService } from './services/google-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'tabulator';

  constructor(private translationService: GoogleTranslateService) { }

}