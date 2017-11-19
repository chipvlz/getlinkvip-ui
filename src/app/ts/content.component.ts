import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-content',
    templateUrl : '../html/content.component.html',
    styleUrls: ['../css/content.component.css']
})

export class ContentComponent {
    link = '';
    results: string[];
    constructor(private http: HttpClient) {}

    getLink(){
        console.log(this.link);
        this.http.get('https://getlinkdownload.herokuapp.com/fshare/getlinkvip?linkFshare='+this.link).subscribe(data => {
            // Read the result field from the JSON response.
            this.results = data['results'];
            console.log(this.results);
        });
    }
}