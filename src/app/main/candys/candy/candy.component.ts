import {Component, Input, OnInit} from '@angular/core';
import {CandyTypeEnum} from "../models/candy-type.enum";

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.scss']
})
export class CandyComponent implements OnInit {
  @Input() type: CandyTypeEnum = CandyTypeEnum.CIRCLE;
  constructor() { }

  ngOnInit(): void {
  }

}
