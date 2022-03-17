import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.sass']
})

export class GeneratorComponent implements OnInit {

word = "";
definition = "";
example = ""

private data:any = []

constructor(private http: HttpClient) {
}

getData(){
  const url ='https://api.urbandictionary.com/v0/random'
  this.http.get(url).subscribe ((res) => {
    this.data = res
    this.word = this.data.list[0].word
    this.definition = this.data.list[0].definition
    this.example = this.data.list[0].example

    console.log(this.data.list[0].word)
    console.log(this.data.list[0].definition);
    console.log(this.data.list[0].example);  
  })
}

ngOnInit(): void {
  this.getData()
}

}
