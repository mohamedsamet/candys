import { Injectable } from '@angular/core';
import {CandyTypeEnum} from "../main/candys/models/candy-type.enum";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  static getRadomType(enumeration: any): CandyTypeEnum {
    const key: number = Math.floor(Math.random() * Object.keys(enumeration).length/2);
    return enumeration[key];
  }
}
