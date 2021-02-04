import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface Unit{
  id: number;
  value: number;
  unit: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  public folder: string;

  // Inputs
  MWeight: string;
  Molarity: string;
  Volume: string;

  //Units
  UMolarity: Unit[] = [
    {
      id: 1,
      value: 1,
      unit: "M"
    },
    {
      id: 2,
      value: 0.001,
      unit: "mM"
    },
    {
      id: 3,
      value: 0.000001,
      unit: "µM"
    },
    {
      id: 4,
      value: 0.000000001,
      unit: "nM"
    },
    {
      id: 5,
      value: 0.000000000001,
      unit: "pM"
    }
  ];
  UVolume: Unit[] = [
    {
      id: 1,
      value: 1,
      unit: "V"
    },
    {
      id: 2,
      value: 0.001,
      unit: "mV"
    },
    {
      id: 3,
      value: 0.000001,
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
  MUnit: Unit = this.UMolarity[0];
  VUnit: Unit = this.UVolume[0];
  PUnit: Unit = this.UMass[0];
  Output: any;
  constructor(private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.folder = "Calculator";
  }
  compare(input: Unit, output: Unit){
    console.log(this);
      if(!(input === output)){
        output == input;

      }
  }
  compareWith = this.compare;
  calcul () {
    let BoolMW = this.validity(this.MWeight);
    let BoolM = this.validity(this.Molarity);
    let BoolV = this.validity(this.Volume);
    if (BoolM && BoolMW && BoolV){
      this.Output = parseFloat(this.MWeight) * parseFloat(this.Molarity) * this.MUnit.value  * parseFloat(this.Volume) * this.VUnit.value / this.PUnit.value;
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
