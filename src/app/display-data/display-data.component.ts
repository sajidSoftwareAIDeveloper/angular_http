import { Component } from '@angular/core';
import { MySeviceService } from '../my-sevice.service';
import { DataSearchComponent } from '../data-search/data-search.component';

@Component({
  selector: 'app-display-data',
  standalone:true,
  imports: [DataSearchComponent],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent {

  public data: Array<any> = [];
  public dataKey:Array<any> = [];
  public temdata: Array<any> = [];    // send as a props 

  public checkDataInsideObject=false;
  public isDataNotFound:boolean=false;


  constructor(private s:MySeviceService){}

   ngOnInit(){

    this.s.getData().subscribe(item=>{
      this.data=item;this.dataKey=Object.keys(this.data[0]);
      this.temdata=this.data;
      this.Call();
    });
  }

   Call(){
    for(let i=0;i<this.dataKey.length;i++){

      // console.log(this.dataKey[i] , typeof this.data[0][this.dataKey[i]] );
      // if(typeof this.data[0][this.dataKey[i]]==='object'){
      //   this.checkDataInsideObject=true;
      //   break;
      // }
    }
  }

  showSearchingData(val:Array<any>){

    if(val.length==1 && val[0]==0){
      this.temdata=this.data;
    }else{
      this.temdata=val;
    }

    if(this.temdata.length==0){
      this.isDataNotFound=true;
    }else{
      this.isDataNotFound=false;
    }
    //  console.log(val);
  }

  // this.em.add(data).subscribe()
  // this.em.update(id,data).subscribe()
  // this.em.delete(id).subscribe()
  
}
