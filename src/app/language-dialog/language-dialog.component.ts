import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.scss']
})
export class LanguageDialogComponent {
 languages = [
    {value: 'de', viewValue: 'Deutsch'},
    {value: 'en', viewValue: 'English'},
    {value: 'es', viewValue: 'Español'},
    {value: 'fr', viewValue: 'Français'},
    {value: 'it', viewValue: 'Italiano'},
    {value: 'ja', viewValue: '日本語'},
    {value: 'nl', viewValue: 'Nederlands' },
    {value: 'zh', viewValue: '中文'}
  ];

   constructor(
    public dialogRef: MatDialogRef<LanguageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
