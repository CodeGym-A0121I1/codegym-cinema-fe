import { Component, OnInit } from '@angular/core';
import {StatisticUserDTO} from "../../../dto/statistic/StatisticUserDTO";
import {UserService} from "../../../service/user.service";


@Component({
  selector: 'app-statistic-user',
  templateUrl: './statistic-user.component.html',
  styleUrls: ['./statistic-user.component.css']
})
export class StatisticUserComponent implements OnInit {
  topListUser: StatisticUserDTO[];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: any;

  constructor(private statisticUserService: UserService) { }

  ngOnInit(): void {
    this.statisticUserService.statisticTopMemberByTotalPrice().subscribe((result: StatisticUserDTO[]) => {
      this.topListUser = result;
      this.totalPages = result.length;
    })
  }

}
