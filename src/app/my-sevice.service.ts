import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { DisplayDataComponent } from './display-data/display-data.component';

@Injectable({
  providedIn: 'root'
})
export class MySeviceService {

  private url='';
  private isLoading=false;

  setIsLoading(val:boolean){
    this.isLoading=val;
  }
  getIsLoading(){
    return this.isLoading;
  }

  // setURL(val:string){
  //   this.url=val;
  // }

  constructor(private http:HttpClient) {
      this.url = JSON.parse(localStorage.getItem('url') ||'');
      console.log(this.url);

   }

  getData():Observable<DisplayDataComponent[]>{return this.http.get<DisplayDataComponent[]>(this.url);}
 
  addData(post:DisplayDataComponent):Observable<DisplayDataComponent>{return this.http.post<DisplayDataComponent>(this.url,post);}
  
  updateData(id:number,post:DisplayDataComponent):Observable<DisplayDataComponent>{return this.http.put<DisplayDataComponent>(`${this.url}/${id}`,post);}
  
  deleteData(id:number):Observable<DisplayDataComponent>{return this.http.delete<DisplayDataComponent>(`${this.url}/${id}`);}

}
