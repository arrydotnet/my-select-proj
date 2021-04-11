import { Component, OnInit } from '@angular/core';
import { deepClone } from '../shared/utility';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-select-proj';
  //public dataArr = new DataArr();
  public columnDataArr: Map<Number, Array<DataItem>>;
  public mainArr: Array<Number> = [];
  readonly columnCount: number = 4;
  public preSelValue: Array<string> = [];
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.mainArr = [];
    //var arrCountry = new Array<string>("-Select-", "India", "USA", "JAPAN", "UK", "RUSSIA", "CANADA");
    let dataItemArray = new Array<DataItem>();

    ["-Select-", "India", "USA", "Japan", "United Kingdom", "Russia", "Canada"].forEach((countryName) => {
      var dataItem = new DataItem();
      dataItem.value = countryName;
      dataItem.isUsed = false;
      dataItem.Selected = false;
      dataItemArray.push(dataItem);
    });

    this.columnDataArr = new Map<Number, Array<DataItem>>();
    for (let index = 0; index < this.columnCount; index++) {
      this.mainArr.push(index);
      this.columnDataArr.set(index, deepClone(dataItemArray));
    }

  }
  SetOther(value, indexArr, resetOther = false) {
    for (let index = 0; index < indexArr.length; index++) {//2,3,4
      const element = indexArr[index];
      const temp = Object.values(this.columnDataArr.get(element)).filter(x => x.value == value);
      resetOther ? temp.map(x => { x.isUsed = false }) : temp.map(x => { x.isUsed = true, x.Selected = false; });
    }
  }
  getMainArr(index: number) {
    var clonedMainArr = [...this.mainArr];
    const remIndex = clonedMainArr.indexOf(index);
    if (remIndex > -1) {
      clonedMainArr.splice(remIndex, 1);
    }
    return clonedMainArr;
  }
  ChangeSelect(selectedValue, index) {
    var mainArr = this.getMainArr(index);

    var preSelValue = this.preSelValue[index];
    if (preSelValue) {
      this.SetOther(preSelValue, mainArr, true);
    }

    var itemArray = Object.values(this.columnDataArr.get(index));
    this.preSelValue[index] = selectedValue;

    //reset all other than current item
    itemArray.filter(x => x.Selected && x.value != selectedValue).forEach((x) => {
      x.Selected = false, x.isUsed = false;
    });
    itemArray.filter(x => x.value == selectedValue).forEach((x) => { //select self
      x.Selected = true, x.isUsed = true;
    });
    const remIndex = itemArray.findIndex(x => x.value == "-Select-");//remove select from list
    if (remIndex > -1) {
      itemArray.splice(remIndex, 1);
      this.columnDataArr.set(index, deepClone(itemArray));
    }
    this.SetOther(selectedValue, mainArr);//to reset the selected value in other drop-down
  }
  GetData(index) {
    if (index > this.columnDataArr.size - 1) {
      return;
    }
    var item = Object.values(this.columnDataArr.get(index));
    return [...item.filter(x => x.Selected), ...item.filter(x => !x.isUsed)]
  }
}

export class DataItem {
  public value: string = "";
  public isUsed: boolean = false;
  public Selected: boolean = false;
}
