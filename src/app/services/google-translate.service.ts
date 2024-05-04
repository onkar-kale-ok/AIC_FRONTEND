import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {

  constructor(private translate: TranslateService) { }

}
