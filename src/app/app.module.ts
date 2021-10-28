import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatTabsModule, MatSidenavContent, MatListModule, MatIcon, MatIconModule, MatMenuModule, MatCard, MatCardModule, MatInput, MatInputModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatFormFieldModule, MatProgressBarModule, MatDialogModule, MatPaginatorModule, MatPaginatorIntl, MatStepperModule, MatSortModule, MatExpansionModule, MatTooltipModule, MAT_CHIPS_DEFAULT_OPTIONS, MatSlideToggle, MatSlideToggleModule, MAT_DATE_LOCALE, MatRadioModule, MatChipsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorImpl } from './util/http.interceptor';
import { LocationStrategy, HashLocationStrategy, registerLocaleData, CurrencyPipe, DatePipe } from '@angular/common';
import { MsgService } from './services/msg.service';
import { ToastrModule } from 'ngx-toastr';
import {MatBadgeModule} from '@angular/material/badge';
import localePt from '@angular/common/locales/pt';
import { BlockUIModule } from 'ng-block-ui';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { getTranslate } from './util/translate-paginator';
import { InitComponent } from './components/init/init.component';
import { ModalConfirmacaoComponent } from './modais/modal-confirmacao/modal-confirmacao.component';
import { TextAreaComponent } from './components/components-tela/text-area/text-area.component';


const jwtOpt: JwtModuleOptions = { config: { tokenGetter: getToken } };
export function getToken(): string {
  return localStorage.getItem('token');
}

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ModalConfirmacaoComponent,
    TextAreaComponent
  ],
  entryComponents: [
    ModalConfirmacaoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSortModule,
    JwtModule.forRoot(jwtOpt),
    MatPaginatorModule,
    MatStepperModule,
    MatExpansionModule,
    MatTooltipModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    MatSlideToggleModule,
    MatListModule,
    MatRadioModule,
    MatChipsModule,
    BlockUIModule.forRoot({
      message: 'Carregando...'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],
  providers: [
    MsgService,
    CurrencyPipe,
    DatePipe,
    { provide: MatPaginatorIntl, useValue: getTranslate() },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorImpl,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
