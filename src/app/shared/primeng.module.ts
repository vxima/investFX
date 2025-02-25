import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule  } from 'primeng/select';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    TooltipModule,
    ProgressSpinnerModule,
    InputGroupAddonModule,
    InputGroupModule,
    SelectModule,
    AccordionModule,
    PanelModule,  
  ],
  exports: [
    ButtonModule,
    CardModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    TooltipModule,
    ProgressSpinnerModule,
    InputGroupAddonModule,
    InputGroupModule,
    SelectModule,
    AccordionModule,
    PanelModule,
  ]
})
export class PrimengModule { }
