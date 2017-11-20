import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-content',
    templateUrl : '../html/content.component.html',
    styleUrls: ['../css/content.component.css']
})

export class ContentComponent {
    link = '';
    status = true;
    linkDownload = '';
    constructor(private http: HttpClient) {}

    getLink(){
        this.http.get('http://localhost:8080/fshare/getlinkvip?linkFshare='+this.link).subscribe(data => {
            // Read the result field from the JSON response.
            if(data['statusCode'] == 1) {
                this.status = false;
                this.linkDownload = data['linkVip'];
            } else {
                this.status = true;
            }
        });
    }
}