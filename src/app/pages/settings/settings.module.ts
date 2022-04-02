import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutes } from './settings.routes';

@NgModule({
declarations: [SettingsComponent],
exports: [SettingsComponent],
imports: [CommonModule, RouterModule.forChild(SettingsRoutes), TranslateModule],
})
export class SettingsModule {}