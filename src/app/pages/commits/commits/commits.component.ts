import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./commits.component.html",
  styleUrls: ["./commits.component.css"]
})
export class CommitsComponent implements OnInit {
  baseUrl: any = "http://54.196.112.226:8080";
  httpParam = new HttpParams();
  httpHeader = new HttpHeaders();
  commitsData: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    public http: HttpClient
  ) {}

  onSubmit() {}
  ngOnInit() {
    this.http.get(this.baseUrl + "/commits").subscribe(
      (response: any) => {
        response.data.forEach(element => {
          this.commitsData.push(element);
        });
        console.log(this.commitsData);
      },
      error => {
        console.log(error);
      }
    );
  }
}
