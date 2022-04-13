import {
    Component,
    ChangeDetectorRef,
    ElementRef,
    ViewChild,
    OnDestroy,
    NgZone
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialogComponent } from '../language-dialog/language-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'application-shell',
  templateUrl: './application-shell.component.html',
  styleUrls: ['./application-shell.component.scss']
})
export class ApplicationShellComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('snav', {static: false}) snav: ElementRef;
  language : string;
  activeTab : string = sessionStorage.getItem('activeTab') || 'Home';

  constructor(
      changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher,
      public dialog: MatDialog,
      private translate: TranslateService,
      public zone: NgZone,
      public router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 900px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LanguageDialogComponent, {
      width: '250px',
      data: {language: this.language}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.language = result;
      if (!!this.language) {
        this.translate.use(this.language);
        window.sessionStorage.setItem('language', this.language);
      }
    });
  }

  navigate(menuItem: string) {
    this.zone.run(() => { 
      this.router.navigate(['/' + menuItem]); 
      this.activeTab = menuItem;
      sessionStorage.setItem('activeTab', menuItem);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
