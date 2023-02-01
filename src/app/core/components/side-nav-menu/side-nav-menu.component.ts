import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss'],
})
export class SideNavMenuComponent {
  constructor(private readonly languageService: LanguageService) {}

  toggleLang() {
    this.languageService.switchLanguages();
  }
}
