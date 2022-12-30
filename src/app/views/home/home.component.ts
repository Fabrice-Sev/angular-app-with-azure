import { Component, OnInit } from '@angular/core';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = "ANGULAR AZURE"
  list:any=[]
  constructor(private appdata: AppdataService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.appdata.showAll().subscribe(data=>{
      console.log(data)
      this.list=data
    },
    error=>{console.log(error.error.message)})
  }

}
