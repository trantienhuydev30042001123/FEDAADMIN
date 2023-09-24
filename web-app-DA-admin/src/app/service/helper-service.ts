import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../environment/environment.pord";
import {Injectable} from "@angular/core";
import {catchError, Observable, of} from "rxjs";
@Injectable({
  providedIn:'root'
})
export class HelperService {
  httpOptions: any;
  baseURL = `${environment.API_LOCAL}/`;
  constructor(
    private httpClient: HttpClient,
    private tokenStorage: TokenService
  ) {
  }
  public getAll( apiURL: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseURL + apiURL , this.httpOptions)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
  public findInfoById(apiURL: string, id:number): Promise<any> {
    console.log("abc")
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseURL + apiURL + "/" + id, this.httpOptions)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  public deleteById(apiURL: string, entity: any,): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.baseURL + apiURL + "/" + entity, this.httpOptions)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
  public deleteOrder(apiURL: string, entity: any,): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseURL + apiURL + "/" + entity, this.httpOptions)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
  public updateStatusOrder(apiURL: string, entity: any,status: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseURL + apiURL + "/" + entity + "/" + status, this.httpOptions)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  // getDetail(id: string | null): Observable<productDTO> {
  //   const url = `${this.baseURL}${id}`;
  //   return this.httpClient.get<productDTO>(url).pipe(
  //   );
  // }
  public add(entity: any, apiURL: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post<any>(this.baseURL + apiURL + "/create" , entity, this.httpOptions)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
  public update(entity: any, apiURL: string, id:number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post<any>(this.baseURL + apiURL + "/" + id, entity, this.httpOptions)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
  public get(apiURL: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseURL + apiURL, this.httpOptions)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
