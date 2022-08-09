import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor() { }

  itemBeingEdited: object = null;

  edit(item: object) {
    this.itemBeingEdited = item;
  }

  save(name: string, item: object) {
    item['name'] = name;
    this.itemBeingEdited = null;
  }



  add(equip: string) {
    const filteredArr = this.equipment.filter(function(item){
      return item['name'] === equip;
    })
    if(filteredArr.length === 0){
      this.equipment.push({name: equip});
    }
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }


  ngOnInit() {
  }

}
