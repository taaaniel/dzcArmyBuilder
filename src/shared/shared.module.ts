import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { L10nConfig, L10nLoader, LocalizationModule, StorageStrategy, ProviderType } from 'angular-l10n';
import { MaterialModule } from './material/material.module';

const l10nConfig: L10nConfig = {
  locale: {
      languages: [
          { code: 'en', dir: 'ltr' },
          { code: 'pl', dir: 'ltr' }
      ],
      defaultLocale: { languageCode: 'en', countryCode: 'EN' },
      storage: StorageStrategy.Cookie
  },
  translation: {
      providers: [
          { type: ProviderType.Static, prefix: './assets/i18n/' }
      ],
      caching: true,
      composedKeySeparator: '.'
  }
};


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    HttpClientModule,
    LocalizationModule.forRoot(l10nConfig)
  ],
  providers: [],
  exports: [
    MaterialModule,
    HttpClientModule,
    LocalizationModule
  ],
  entryComponents: []
})

export class SharedModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
 }
