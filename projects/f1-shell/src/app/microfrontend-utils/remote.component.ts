import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-remote-component',
  standalone: true,
  template: ``,
})
export class RemoteComponent implements OnInit {
  element = inject(ElementRef);
  viewContainerRef = inject(ViewContainerRef);

  async ngOnInit() {
    const remote = await import('login/UserHeader').then(
      (m) => m.UserHeaderComponent
    );
    let componentRef = this.viewContainerRef.createComponent(remote);

    const host = this.element.nativeElement;
    componentRef.changeDetectorRef.markForCheck();
    host.insertBefore(componentRef.location.nativeElement, host.firstChild);
  }
}
