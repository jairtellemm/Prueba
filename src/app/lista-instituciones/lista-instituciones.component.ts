import { Component, Input, OnInit } from '@angular/core';
import { Socio } from '../models/socios.model';
import { SociosService } from '../services/socios.service';

@Component({
  selector: 'app-lista-instituciones',
  templateUrl: './lista-instituciones.component.html',
  styleUrls: ['./lista-instituciones.component.scss']
})
export class ListaInstitucionesComponent implements OnInit {

 socios: Socio[]=[];
 
  constructor(private sociosService: SociosService) { }

  ngOnInit(): void {
   this.socios = this.sociosService.getList();
  }

  remove(soc:Socio){
    if (confirm("Desea eliminar el socio")){
      this.sociosService.deleteInstitution(soc);
    }
  }

}
