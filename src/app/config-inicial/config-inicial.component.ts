import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-config-inicial',
  templateUrl: './config-inicial.component.html',
  styleUrls: ['./config-inicial.component.css']
})
export class ConfigInicialComponent implements OnInit {
  
  valida_config_inicial: boolean;0
  nome_arquivo_config : String;
  
  constructor() { }
  
  ngOnInit(): void {
    const fs = require('fs');
  }
  
  valida_arquivo(nome_arquivo_config){
    
  
    

    return this.valida_config_inicial
  }

}
