import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistance-finder',
  templateUrl: './resistance-finder.component.html',
  styleUrls: ['./resistance-finder.component.scss']
})
export class ResistanceFinderComponent implements OnInit {
  public dropdownSettingsOne = {
    singleSelection: true,
    text: '1st Band',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: 'multi-select'
  };
  public dropdownSettingsTwo = {
    singleSelection: true,
    text: '2nd Band',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: 'multi-select'
  };
  public dropdownSettingsThree = {
    singleSelection: true,
    text: 'Multiplier',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: 'multi-select'
  };
  public dropdownSettingsFour = {
    singleSelection: true,
    text: 'Tolerance',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: 'multi-select'
  };

  public band = {
    one: '',
    two: '',
    three: '',
    four: ''
  }
  public dropdownList = {
    bandOne: [
      { 'id': 0, 'itemName': 'Black' },
      { 'id': 1, 'itemName': 'Brown' },
      { 'id': 2, 'itemName': 'Red' },
      { 'id': 3, 'itemName': 'Orange' },
      { 'id': 4, 'itemName': 'yellow' },
      { 'id': 5, 'itemName': 'Green' },
      { 'id': 6, 'itemName': 'Blue' },
      { 'id': 7, 'itemName': 'Violet' },
      { 'id': 8, 'itemName': 'Gray' },
      { 'id': 9, 'itemName': 'White' },
    ],
    bandTwo: [
      { 'id': 0, 'itemName': 'Black' },
      { 'id': 1, 'itemName': 'Brown' },
      { 'id': 2, 'itemName': 'Red' },
      { 'id': 3, 'itemName': 'Orange' },
      { 'id': 4, 'itemName': 'yellow' },
      { 'id': 5, 'itemName': 'Green' },
      { 'id': 6, 'itemName': 'Blue' },
      { 'id': 7, 'itemName': 'Violet' },
      { 'id': 8, 'itemName': 'Gray' },
      { 'id': 9, 'itemName': 'White' },
    ],
    bandThree: [
      { 'id': 1, 'itemName': 'Black' },
      { 'id': 10, 'itemName': 'Brown' },
      { 'id': 100, 'itemName': 'Red' },
      { 'id': 1000, 'itemName': 'Orange' },
      { 'id': 10000, 'itemName': 'yellow' },
      { 'id': 100000, 'itemName': 'Green' },
      { 'id': 1000000, 'itemName': 'Blue' },
      { 'id': 10000000, 'itemName': 'Violet' },
      { 'id': 100000000, 'itemName': 'Gray' },
      { 'id': 1000000000, 'itemName': 'White' },
      { 'id': 0.1, 'itemName': 'Gold' },
      { 'id': 0.01, 'itemName': 'Silver' },
    ],
    bandFour: [
      { 'id': 1, 'itemName': 'Brown' },
      { 'id': 2, 'itemName': 'Red' },
      { 'id': 0.5, 'itemName': 'Green' },
      { 'id': 0.25, 'itemName': 'Blue' },
      { 'id': 0.1, 'itemName': 'Violet' },
      { 'id': 0.05, 'itemName': 'Gray' },
      { 'id': 5, 'itemName': 'Gold' },
      { 'id': 10, 'itemName': 'Silver' },
    ]
  }
  public resistance_value;
  constructor() { }

  ngOnInit() {
  }

  findResistance(event) {
    let value;
    let tolerance;
    if (this.band.one.length !== 0 && this.band.two.length !== 0 && this.band.three.length !== 0 && this.band.four.length !== 0) {
      value = ((this.band.one[0]['id'] * 10) + (this.band.two[0]['id'])) * (this.band.three[0]['id']);
      tolerance = this.band.four[0]['id'];
      this.resistance_value = `${value} ohms ${tolerance}%`;
      if (value >= 1000 && value < 1000000) {
        this.resistance_value = `${value / 1000}k ohms ${tolerance}%`;
      } else if (value >= 1000000 && value < 1000000000) {
        this.resistance_value = `${value / 1000000}M ohms ${tolerance}%`;
      } else if (value >= 1000000000 && value < 100000000000) {
        this.resistance_value = `${value / 1000000000}G ohms ${tolerance}%`;
      }
    } else {
      this.resistance_value = '';
    }
  }

}
