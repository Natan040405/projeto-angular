import { Component } from "@angular/core";

interface mov{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reserva',
  templateUrl:'./app-reserva.component.html',
  styleUrls:['./app-reserva.component.scss']
})
export class AppReservaComponent{
  movs: mov[] = [
    {value: 'Reservar', viewValue: 'Reservar'},
    {value: 'Devolver', viewValue: 'Devolver'},
  ]
}
