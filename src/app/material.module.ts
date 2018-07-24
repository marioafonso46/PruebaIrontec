import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatListModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatListModule, MatInputModule, MatToolbarModule],
  exports: [MatButtonModule, MatListModule, MatInputModule, MatToolbarModule]
})
export class MaterialModule { }
