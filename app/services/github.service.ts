import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{

    private username:string;
    private client_id = '<your client ID>'; //your client ID key
    private client_secret = '<your secret key>'; // your secret Key 

    constructor(private _http: Http){
        console.log('GitHubService ready');
        this.username= 'claudioc8211' // Your username
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json()); //return a json file
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json()); //return a json file
    }

    updateUser(username:string){
        this.username = username;
    }
}