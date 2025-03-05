import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
// import { MySeviceService } from '../my-sevice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private route:Router){}

  public isError=false;
  public isTyping='';

  buttonClickedHandle(val:string){
    // console.log(val);

    if(this.isValidateURL(val)){
    
      localStorage.setItem('url', JSON.stringify(val));   //set local storage 
      this.isError=false; 
      // this.url.setURL(val);
      this.route.navigate(['display-data']);

    }else{
        this.isError=true;
    }
  }

  isValidateURL(val:string){
    const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return  pattern.test(val);
  }

}
