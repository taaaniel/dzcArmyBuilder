import { NgModule } from '@angular/core';
import { MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatSelectModule,
  MatToolbarModule,
  MatTabsModule,
  MatRadioModule,
  MatTableModule,
  MatSortModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatTooltipModule} from '@angular/material';


const MATERIAL_MODULES = [
  MatToolbarModule,
  MatTabsModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatDialogModule

];

@NgModule({
  exports: [
    [...MATERIAL_MODULES]
  ]
})
export class MaterialModule { }
