import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface Unit{
  id: number;
  value: number;
  unit: string;
}

@Component({
  selector: 'app-volume-calculator',
  templateUrl: './volume-calculator.page.html',
  styleUrls: ['./volume-calculator.page.scss'],
})
export class VolumeCalculatorPage implements OnInit {
  public folder: string;

  // Inputs
  MWeight: string;
  Molarity: string;
  Weight: string;

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
      unit: "L"
    },
    {
      id: 2,
      value: 0.001,
      unit: "mL"
    },
    {
      id: 3,
      value: 0.000001,
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
  MUnit: Unit = this.UMolarity[0];
  VUnit: Unit = this.UVolume[0];
  PUnit: Unit = this.UMass[0];
  Output: any;
  constructor(private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.folder = "Volume Calculator";
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
    let BoolW = this.validity(this.Weight);
    if (BoolM && BoolMW && BoolW){
      let result = parseFloat(this.MWeight) * parseFloat(this.Molarity.replace(',','.')) * this.MUnit.value  / parseFloat(this.Weight.replace(',','.')) * this.PUnit.value / this.VUnit.value;
      this.Output =result.toPrecision(5);
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
      input = input.replace(',','.');
      return true
    }
  }

}
