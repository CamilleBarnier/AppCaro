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
      unit: "V"
    },
    {
      id: 2,
      value: 1,
      unit: "mV"
    },
    {
      id: 3,
      value: 0.001,
      unit: "µV"
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
      this.Output = parseFloat(this.Perc) * parseFloat(this.Volume) * this.VUnit.value / this.PUnit.value;
      console.log(this);
    }
    else{
      this.toastr.error("A value is empty", "error", {timeOut:600});
    }
    
  }

  validity(input:string):boolean{
    if(input == null){
      return false;
    }
    else{
      input = input.replace(',','.');
      return true
    }
  }
}
