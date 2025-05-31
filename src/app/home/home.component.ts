import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit, AfterViewInit {

  loaded = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  public ravioliImageDesktopUrl: string = "../../assets/images/pellicciaOutside.jpeg";
  public ravioliImageMobileUrl: string = "../../assets/images/pellicciaOutsideMobile.jpeg"

  constructor(
    private translate: TranslateService, 
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 650px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
    })
  }

}
