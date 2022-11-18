import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IhttpService {

  constructor(private http: HttpClient) { }

  public get(endpoint: string)
  {
    return this.http.get(environment.iapiurl + endpoint, { observe: 'response' });
  }

  public post(endpoint: string, body: any)
  {
    return this.http.post(environment.iapiurl + endpoint, body, { observe: 'response' });
  }

  public put(endpoint: string, body: any)
  {
    return this.http.put(environment.iapiurl + endpoint, body, { observe: 'response'});
  }

  public delete(endpoint: string)
  {
    return this.http.delete(environment.iapiurl + endpoint, { observe: 'response'});
  }
}
