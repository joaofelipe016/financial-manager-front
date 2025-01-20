import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private viewContainerRef: ViewContainerRef | null = null;
  private modalComponentRef: ComponentRef<any> | null = null;

  constructor(private injector: Injector) {}

  setViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  open(component: any, properties: any = {}): void {
    if (!this.viewContainerRef) {
      throw new Error('ViewContainerRef is not set! Use setViewContainerRef() in your parent component.');
    }
    this.close();
    this.modalComponentRef = this.viewContainerRef.createComponent(component, { injector: this.injector });
    Object.assign(this.modalComponentRef.instance, properties);
  }

  close(): void {
    if (this.modalComponentRef) {
      this.modalComponentRef.destroy();
      this.modalComponentRef = null;
    }
  }

}
