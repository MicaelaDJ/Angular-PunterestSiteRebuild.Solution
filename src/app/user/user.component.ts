import { Component, OnInit } from '@angular/core';
import { PunService } from '../pun.service';
import { Pun } from '../pun.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [PunService]
})
export class UserComponent implements OnInit {

  constructor(private punService: PunService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string) {
    var newPun: Pun = new Pun (title, description);
    console.log(newPun);
  }

}
