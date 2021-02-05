import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface Unit{
  id: number;
  value: number;
  unit: string;
}

@Component({
  selector: 'app-mass-calc-percent',
  templateUrl: './mass-calc-percent.page.html',
  styleUrls: ['./mass-calc-percent.page.scss'],
})
export class MassCalcPercentPage implements OnInit {
  public folder: string;

  // Inputs
  Perc: string;
  Volume: string;

  //Units
  UVolume: Unit[] = [
    {
      id: 1,
      value: 1000,
      unit: "L"
    },
    {
      id: 2,
      value: 1,
      unit: "mL"
    },
    {
      id: 3,
      value: 0.001,
      unit: "µL"
    }
  ];
  UMass: Unit[] = [
    {
      id: 1,
      value: 1000,
      unit: "Kg"
    },
    {
      id: 2,
      value: 1,
      unit: "g"
    },
    {
      id: 3,
      value: 0.001,
      unit: "mg"
    },
    {
      id: 4,
      value: 0.000001,
      unit: "µg"
    }
  ]
  VUnit: Unit = this.UVolume[0];
  PUnit: Unit = this.UMass[0];
  Output: any;
  constructor(private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) {
                this.folder = "Mass Calculator Percent";
               }

  ngOnInit() {
  }
  compare(input: Unit, output: Unit){
    console.log(this);
      if(!(input === output)){
        output == input;

      }
  }
  compareWith = this.compare;
  calcul () {
    let BoolP = this.validity(this.Perc);
    let BoolV = this.validity(this.Volume);
    if (BoolP && BoolV){
      let result = parseFloat(this.Perc.replace(',','.')) * parseFloat(this.Volume.replace(',','.')) * this.VUnit.value / this.PUnit.value;
      this.Output =result.toPrecision(5);
      console.log(this);
    }
    else{
      console.log(this);
    }
    
  }

  validity(input:string):boolean{
    if(input == null){
      return false;
    }
    else{
      return true
    }
  }
}
