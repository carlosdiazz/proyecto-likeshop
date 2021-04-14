import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('paypal',{ static: true}) paypalElment : ElementRef;

  producto={
    descripcion: "Nada de nada",
    precio: "100"
  }

  title = 'fronted';
  name = 'Carlos Diaz';

  ngOnInit(){
    paypal
    .Buttons()
    .render( this.paypalElment.nativeElement);
  }

}
