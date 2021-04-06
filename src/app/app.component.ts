import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-select-proj';
  public dataArr = new DataArr();
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    var arr = new Array<string>("-Select-", "India", "USA", "JAPAN", "UK", "RUSSIA", "CANADA");
    for (let index = 0; index < arr.length; index++) {
      const countryName = arr[index];
      var dataItem = new DataItem();
      dataItem.value = countryName;
      dataItem.isUsed = false;
      dataItem.Selected = false;
      this.dataArr.col1.push({ ...dataItem });
      this.dataArr.col2.push({ ...dataItem });
      this.dataArr.col3.push({ ...dataItem });
      this.dataArr.col4.push({ ...dataItem });
    }
  }
  SetOther(value, indexArr) {
    for (let index = 0; index < indexArr.length; index++) {//2,3,4
      const element = indexArr[index];
      switch (element) {
        case 1:
          var itm = this.dataArr.col1.filter(x => x.value == value);//set index
          if (itm) {
            itm[0].isUsed = true;
          }
          break;
        case 2:
          var itm = this.dataArr.col2.filter(x => x.value == value);//set index
          if (itm) {
            itm[0].isUsed = true;
          }
          break;
        case 3:
          var itm = this.dataArr.col3.filter(x => x.value == value);//set index
          if (itm) {
            itm[0].isUsed = true;
          }
          break;
        case 4:
          var itm = this.dataArr.col4.filter(x => x.value == value);//set index
          if (itm) {
            itm[0].isUsed = true;
          }
          break;
      }
    }
  }
  ChangeSelect(event, index) {
    var row1 = this.dataArr.col1.filter(x => x.Selected && x.value != event);
    if (row1 && row1.length) {
      row1[0].Selected = false;//set al false
      row1[0].isUsed = false;//set al false
    } 
    var row2 = this.dataArr.col2.filter(x => x.Selected && x.value != event);
    if (row2 && row2.length) {
      row2[0].Selected = false;//set al false
      row2[0].isUsed = false;//set al false
    }
    var row3 = this.dataArr.col3.filter(x => x.Selected && x.value != event);
    if (row3 && row3.length) {
      row3[0].Selected = false;//set al false
      row3[0].isUsed = false;//set al false
    }
    var row4 = this.dataArr.col4.filter(x => x.Selected && x.value != event);
    if (row4 && row4.length) {
      row4[0].Selected = false;//set al false
      row4[0].isUsed = false;//set al false
    }

    if (index == 1) {
      // var selected = this.dataArr.col1.findIndex(x => x.Selected && x.value != event);
      // if (selected>-1) {
      //   this.dataArr.col1[selected].Selected = false;//set al false
      //   this.dataArr.col1[selected].isUsed = false;//set al false
      // }
      var idx = this.dataArr.col1.findIndex(x => x.value == event);//set index
      for (let index = 0; index < this.dataArr.col1.length; index++) {
        if (index != idx) {
          //this.dataArr.col1[index].isUsed = false;//set al false
          //this.dataArr.col1[idx].Selected = false; 
        } else {
          this.dataArr.col1[idx].isUsed = true;//set al false
          this.dataArr.col1[idx].Selected = true;//set al false
        }
      }
      this.SetOther(event, [2, 3, 4]);
    }
    else if (index == 2) {
      // var selected = this.dataArr.col2.findIndex(x => x.Selected && x.value != event);
      // if (selected>-1) {
      //   this.dataArr.col2[selected].Selected = false;//set al false
      //   this.dataArr.col2[selected].isUsed = false;//set al false
      // }
      var idx = this.dataArr.col2.findIndex(x => x.value == event);//set index
      for (let index = 0; index < this.dataArr.col2.length; index++) {
        if (index != idx) {
          //this.dataArr.col2[index].isUsed = false;//set al false
          //this.dataArr.col2[idx].Selected = false; 

        } else {
          this.dataArr.col2[idx].isUsed = true;//set al false
          this.dataArr.col2[idx].Selected = true;//set al false
        }
      }
      this.SetOther(event, [1, 3, 4]);
    } else if (index == 3) {
      // var selected = this.dataArr.col3.findIndex(x => x.Selected && x.value != event);
      // if (selected>-1) {
      //   this.dataArr.col3[selected].Selected = false;//set al false
      //   this.dataArr.col3[selected].isUsed = false;//set al false
      // }
      var idx = this.dataArr.col3.findIndex(x => x.value == event);//set index
      for (let index = 0; index < this.dataArr.col3.length; index++) {
        if (index != idx) {
          //this.dataArr.col3[index].isUsed = false;//set al false
          //this.dataArr.col3[idx].Selected = false; 

        } else {
          this.dataArr.col3[idx].isUsed = true;//set al false
          this.dataArr.col3[idx].Selected = true;//set al false
        }
      }
      this.SetOther(event, [1, 2, 4]);
    } else if (index == 4) {
      // var selected = this.dataArr.col4.findIndex(x => x.Selected && x.value != event);
      // if (selected>-1) {
      //   this.dataArr.col4[selected].Selected = false;//set al false
      //   this.dataArr.col4[selected].isUsed = false;//set al false
      // }
      var idx = this.dataArr.col4.findIndex(x => x.value == event);//set index
      for (let index = 0; index < this.dataArr.col4.length; index++) {
        if (index != idx) {
          //this.dataArr.col4[index].isUsed = false;//set al false
          //this.dataArr.col4[idx].Selected = false; 

        } else {
          this.dataArr.col4[idx].isUsed = true;//set al false
          this.dataArr.col4[idx].Selected = true;//set al false
        }
      }
      this.SetOther(event, [1, 2, 3]);
    }
  }
  GetData(index) {
    switch (index) {
      case 1:
        return [...this.dataArr.col1.filter(x => !x.isUsed), ...this.dataArr.col1.filter(x => x.Selected)]
        break;
      case 2:
        return [...this.dataArr.col2.filter(x => !x.isUsed), ...this.dataArr.col2.filter(x => x.Selected)]
        break;
      case 3:
        return [...this.dataArr.col3.filter(x => !x.isUsed), ...this.dataArr.col3.filter(x => x.Selected)]
        break;
      case 4:
        return [...this.dataArr.col4.filter(x => !x.isUsed), ...this.dataArr.col4.filter(x => x.Selected)]
        break;
    }
  }
}

export class DataArr {
  public col1: Array<DataItem> = [];
  public col2: Array<DataItem> = [];
  public col3: Array<DataItem> = [];
  public col4: Array<DataItem> = [];
}
export class DataItem {
  public value: string = "";
  public isUsed: boolean = false;
  public Selected: boolean = false;
}