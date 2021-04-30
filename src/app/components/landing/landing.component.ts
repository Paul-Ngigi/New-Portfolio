import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Quote } from '../../quote-class/quote'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  quote!: Quote;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse {
      author: string;
      quote: string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    })

  }

}
