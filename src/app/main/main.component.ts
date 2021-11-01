import {Component, OnInit} from '@angular/core';
import {CandyTypeEnum} from "./candys/models/candy-type.enum";
import {CandyModel} from "./candys/models/candy.model";
import {MainService} from "../service/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public candyType = CandyTypeEnum
  public dimensions = {width: 8, length: 8}
  public candiys: CandyModel[] = []

  ngOnInit(): void {
    this.populateDefaultCandys()
  }

  private populateDefaultCandys() {
    for (let i = 0; i < this.dimensions.width; i++ ) {
      for (let j = 0; j < this.dimensions.length; j++) {
        this.candiys.push({
          x: i + 1,
          y: j + 1,
          type: MainService.getRadomType(CandyTypeEnum)
        })
      }
    }
  }

}
