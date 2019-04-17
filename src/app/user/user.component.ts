import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PunService } from '../pun.service';
import { Pun } from '../pun.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [PunService]
})

export class UserComponent implements OnInit {
  punId: number;
  punToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private punService: PunService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.punId = urlParameters['id'];
    });
    this.punToDisplay =
    this.punService.getPunById(this.punId);
  }

  submitForm(title: string, description: string) {
    var newPun: Pun = new Pun (title, description);
    this.punService.addPun(newPun);
    console.log(newPun);
  }

}
