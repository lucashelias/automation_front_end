import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';

@Component({
  selector: 'app-config-inicial',
  templateUrl: './config-inicial.component.html',
  styleUrls: ['./config-inicial.component.css']
})
export class ConfigInicialComponent implements OnInit {
  
  valida_config_inicial: boolean;
  path_arq_automacao: String;
  nome_arquivo_config : String = ''
    
  constructor() { }
  
  ngOnInit(): void {
  }
  
  valida_arquivo(nome_arquivo_config){
      

    

    return this.valida_config_inicial
  }

}
