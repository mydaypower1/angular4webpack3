import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule }     from './app-routing.module';

import { CdkTableModule } from '@angular/cdk';
import {
  MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdPaginatorModule,
  MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule,
  MdDialogModule, MdGridListModule, MdIconModule, MdInputModule,
  MdListModule, MdMenuModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdRadioModule, MdSelectModule, MdSidenavModule, MdSliderModule, MdSortModule,
  MdSlideToggleModule, MdSnackBarModule, MdTableModule, MdTabsModule, MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { PageNotFoundComponent } from './handleException/page-not-found/page-not-found.component';
import { DialogComponent, DialogResultExampleDialog } from './prettyGood/dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CdkTableModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdPaginatorModule,
    MdSortModule,
    MdTableModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DialogComponent,
    DialogResultExampleDialog
  ],
  // entryComponents: [DialogResultExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
