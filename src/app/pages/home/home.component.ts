import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
public a = 100;
public b = 43;
email_response='sundharamece1998@gmail.com';
constructor(private translateConfigService: TranslateConfigService) {}

ngOnInit(): void {}

}
