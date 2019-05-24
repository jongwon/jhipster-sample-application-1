import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  SampleApplication1SharedLibsModule,
  SampleApplication1SharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [SampleApplication1SharedLibsModule, SampleApplication1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SampleApplication1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleApplication1SharedModule {
  static forRoot() {
    return {
      ngModule: SampleApplication1SharedModule
    };
  }
}
