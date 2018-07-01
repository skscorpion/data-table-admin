import { Component, OnInit } from '@angular/core';
import { PhysicianService } from './physician.service';
import { IPhysician } from './physician';

@Component({
  // selector: 'app-physicianadmin',
  templateUrl: './physicianadmin.component.html',
  styleUrls: ['./physicianadmin.component.css']
})
export class PhysicianadminComponent implements OnInit {
  pageTitle: string = "Physician Admin";
  updatedData: IPhysician[] = [];
  withoutAddr: IPhysician[];

  constructor(private dataService: PhysicianService) { }

  ngOnInit() {
    this.dataService.getAllPhysicians().then(data => this.withoutAddr = data);
    //  this.withAddr = this.dataService.getDataWithAddress();
  }

  updateAddr(npi, i): void {
    this.dataService.getSelectedPhysician().then(data => {
      if (npi === data.npi && this.withoutAddr[i].npi === npi) {
        this.withoutAddr[i].address = data.address;
        this.withoutAddr[i].state = data.state;
        this.withoutAddr[i].zipcode = data.zipcode;
        this.withoutAddr[i].isUpdated = true;
        this.updatedData.push(data);
        console.log(this.updatedData);
      }
    }).catch(err => console.log('error:' + err));
  }

  loopItems(data: IPhysician) {
    for (let i = 0; i <= this.withoutAddr.length; i++) {
      if (data.npi == this.withoutAddr[i].npi)
        this.withoutAddr[i].address = data.address;
      this.withoutAddr[i].state = data.state;
      this.withoutAddr[i].zipcode = data.zipcode;
      this.withoutAddr[i].isUpdated = true;
      break;
    }
    console.log('test');
  }

  getSelectedPhysician() {
    this.dataService.getSelectedPhysician().then(data => {
      console.log(data);
    }).catch(err => console.log('error:' + err));
  }

  RemoveAddr(npi, index): void {
    this.withoutAddr[index].address = null;
    this.withoutAddr[index].state = null;
    this.withoutAddr[index].zipcode = null;
    this.withoutAddr[index].isUpdated = false;
    this.deleteItem(npi);
    console.log(this.updatedData);
  }
  deleteItem(npi) {
    let index = this.updatedData.findIndex(x => x.npi == npi);
    if (index > -1)
      this.updatedData.splice(index, 1);
  }
}
