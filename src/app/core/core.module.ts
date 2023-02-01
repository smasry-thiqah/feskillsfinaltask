import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavMenuComponent } from './components/side-nav-menu/side-nav-menu.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateLoaderFactory } from './factories/translate-loader.factory';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SideNavMenuComponent,
    BreadcrumbsComponent,
    CartModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    LanguageService,
    {
      provide: APP_INITIALIZER,
      deps: [LanguageService],
      useFactory: (languageService: LanguageService) => {
        languageService.loadDefaultLangsAndStyles();
      },
    },
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
