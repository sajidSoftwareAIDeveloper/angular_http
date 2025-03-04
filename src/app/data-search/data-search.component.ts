import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-search',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './data-search.component.html',
  styleUrl: './data-search.component.css'
})
export class DataSearchComponent {


  public isError=false;
  public isTyping=false;
  public isUniqueId:string='';
  public searchedData:Array<any>=[];
  public name='';

  @Input()data:Array<any>=[];
  @Input()dataKey:Array<any>=[];
  @Output()showSearchingData=new EventEmitter<Array<any>>();

  findingUniqueId(){
    for(let i=0;i<this.dataKey.length;i++){
      if( (new Set(this.data.map(item=>item[this.dataKey[i]]) ).size)==this.data.length){
         this.isUniqueId=this.dataKey[i];
         break;
      }
    }
  }

  searchHandle(val:string){
    // alert('here');
    if(val!=''){

      this.isError=false;
      this.findingUniqueId();
  
      if(this.isUniqueId!=''){
        this.searchedData= this.data.filter(item=>{
          // return item[this.isUniqueId]==item[this.isUniqueId].startsWith(val);
          return  String(item[this.isUniqueId]).startsWith(val)   // before mached data return
          });

          // console.log('search::',this.isUniqueId,val,this.searchedData);
      }

      this.showSearchingData.emit(this.searchedData);

    }else{
      this.showSearchingData.emit([0]);
      this.isError=true;
    }

  }


}
