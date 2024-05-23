import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit{

  searchproduct:any;
  constructor(private _productservice:ProductserviceService,private _activateroute:ActivatedRoute){

  }

ngOnInit(): void {
    this.showinsearchpage();
}

  showinsearchpage(){
    this._productservice.showproinsearchpage(this._activateroute.snapshot.params['query']).subscribe((result:any)=>{
      
     
        this.searchproduct=result;
        
        
        
      console.log(result);
    })
  }
}
