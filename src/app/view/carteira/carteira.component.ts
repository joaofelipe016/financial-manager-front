import { Component, OnInit } from '@angular/core';
import { faWallet, faPlus, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {
  faWallet = faWallet;
  faPlus = faPlus;
  faExchangeAlt = faExchangeAlt;

  carteiras = [
    { id: 1, nome: 'Carteira Principal', saldo: 5000, isPrincipal: true },
    { id: 2, nome: 'Poupança', saldo: 2000, isPrincipal: false },
  ];

  ngOnInit(): void {}
}
