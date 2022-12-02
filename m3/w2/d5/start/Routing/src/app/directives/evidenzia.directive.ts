import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective {


  @Input() defaultColor:string = 'red';

  @HostBinding('style.backgroundColor') color: string = 'yellow';

  constructor( private ref: ElementRef ) { }

  ngOnInit():void{
    this.color = this.defaultColor
  }
}
