import { Component, OnInit } from '@angular/core';
import { BUILD_TIMESTAMP, VERSION } from 'app/app.constants';

@Component({
  selector: 'jhi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  version = '';
  build_timestamp = '';
  ngOnInit(): void {
    if (VERSION) {
      this.version = VERSION.toLowerCase().startsWith('v') ? VERSION : 'v' + VERSION;
    }
    if (BUILD_TIMESTAMP) {
      this.build_timestamp = BUILD_TIMESTAMP;
    }
  }
}
