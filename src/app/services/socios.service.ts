import { Injectable } from '@angular/core';
import { Socio } from '../models/socios.model';



@Injectable({
  providedIn: 'root'
})
export class SociosService {

  arrSocios: Socio[];

  constructor() { 
    this.arrSocios = [{
      institution: "",
      acronym: "",
      name: "",
      type: "",
      country: "",
      city: "",
      url: ""
    }]
  }

  getList(){
    if (localStorage.getItem('arrSocios')==null) {
      return this.arrSocios;
    } else {
     this.arrSocios=JSON.parse(localStorage.getItem("arrSocios") || '{}');
     console.log(this.arrSocios);
      return this.arrSocios;
    }
  }

  addIstitution(listInstitution: Socio){
    //console.log(listInstitution);
   let arrSocios: Socio[]=[];
   if(localStorage.getItem('arrSocios')==null){
     arrSocios.push(listInstitution);
     localStorage.setItem('arrSocios', JSON.stringify(arrSocios));
   }else{
     //let s=localStorage.getItem('arrSocios');
     arrSocios=JSON.parse(localStorage.getItem("arrSocios") || '{}');
     console.log(this.arrSocios);
     arrSocios.push(listInstitution);
     localStorage.setItem('arrSocios', JSON.stringify(arrSocios));
   }
   this.getList();
 }

  deleteInstitution(listInstitution: Socio){
    for(let i=0;i<this.arrSocios.length;i++){
      if(listInstitution==this.arrSocios[i]){
        this.arrSocios.splice(i,1);
        localStorage.setItem('arrSocios', JSON.stringify(this.arrSocios));
      }
    }
  }


 
}
