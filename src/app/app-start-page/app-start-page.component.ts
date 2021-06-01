import { Overlay , OverlayConfig} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrls: ['./app-start-page.component.scss']
})
export class AppStartPageComponent implements OnInit {
  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {}

  open() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
        .width("600px");
    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  
    overlayRef.attach(new ComponentPortal(TableComponent, this.viewContainerRef));
  }

}
