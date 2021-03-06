import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
selector: 'app-settings',
templateUrl: './settings.component.html',
styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
constructor(private translate: TranslateConfigService) {}

ngOnInit(): void {}

/* Change default language */
changeDefaultLanguage(langType: string){
this.translate.changeLanguage(langType);
}

}