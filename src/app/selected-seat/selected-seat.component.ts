import {Component, Input, OnInit} from '@angular/core';
import {MovieDTO} from "../model/dto/MovieDTO";

@Component({
  selector: 'app-selected-seat',
  templateUrl: './selected-seat.component.html',
  styleUrls: ['./selected-seat.component.css']
})
export class SelectedSeatComponent implements OnInit {

  constructor() { }
  @Input() movieShow! :MovieDTO;

  ngOnInit(): void {
    console.log(this.movieShow)
  }

}
