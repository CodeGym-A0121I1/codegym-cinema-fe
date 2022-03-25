import {Component, Input, OnInit} from '@angular/core';
import {ShowTimeService} from "../../../service/show-time.service";

import {Seat} from "../../../model/theater/Seat";
import {MovieDTO} from "../../../dto/showTime/MovieDTO";
import {SeatMovieDTO} from "../../../dto/showTime/SeatMovieDTO";

@Component({
  selector: 'app-selected-seat',
  templateUrl: './selected-seat.component.html',
  styleUrls: ['./selected-seat.component.css']
})
export class SelectedSeatComponent implements OnInit {

  constructor(private showservice: ShowTimeService) {
  }

  @Input() movieShow!: MovieDTO;
  listSeatBooks: Array<Seat>=[];
  listLocalSeat: Array<string> = ['A', 'B', 'C', 'D', 'E'];
  listseatUserBooked: string[] = [];
  movieSeatDTO!:SeatMovieDTO;
  isDisplay:boolean=false;
  isDisplay1:boolean=false;

  ngOnInit(): void {
    this.showservice.getAllSeatBookedByTheaterId(this.movieShow.theater.id).subscribe(data => {
          this.listSeatBooks = data;
          for (let i = 0; i < this.listSeatBooks.length; i++) {
            this.listseatUserBooked.push(this.listSeatBooks[i].name);
          }
        }
    )
  }
  checkSeatBooked(str: string) {
    let result = '';
    for (let i = 0; i < this.listSeatBooks.length; i++) {
      if (this.listSeatBooks[i].name == str) {
        result = "seat_disable"
      }
    }
    return result;
  }


  counter(i: number) {
    return new Array(i);
  }

  take(name: string) {
    let dem: number = 0;
    for (let i = 0; i < this.listseatUserBooked.length; i++) {
      if (this.listseatUserBooked[i] == name) {
        this.listseatUserBooked.splice(i, 1)
        dem++;
      }
    }
    if (dem == 0) {
      this.listseatUserBooked.push(name);
    }

  }

  takeInformationSeat() {
    for (let i = 0; i < this.listseatUserBooked.length; i++) {
      for (let j = 0; j < this.listSeatBooks.length; j++) {
        if(this.listseatUserBooked[i]==this.listSeatBooks[j].name){
          this.listseatUserBooked.splice(i, 1)
        }
      }
    }
    this.movieSeatDTO ={
      movie:this.movieShow.movie,
      Theater:this.movieShow.theater,
      dateStart:this.movieShow.dateStart,
      timeStart:this.movieShow.timeSelected,
      price:this.movieShow.price,
      listSeat:this.listseatUserBooked
    }
    this.isDisplay = true;
    console.log(this.movieSeatDTO);
  }

  displayShowTime() {
    this.isDisplay1=true;
  }
}
