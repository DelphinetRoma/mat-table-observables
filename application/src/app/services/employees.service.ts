import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
//import { Observable, of, from } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';
import { tap, map, from, lastValueFrom, Observable, Subject } from 'rxjs';
import { CompetenzaList, EmployeeList, MansioneList, ListaQuote, Workers, WorkerDetail, DataResponse, NewWorkersData } from '../interfaces/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  endpoint: string = 'http://52.29.192.144/gextar_api/public/api';

  private employeeList: EmployeeList[] = [];
  private competenzaList: CompetenzaList [] = [];
  private mansioneList: MansioneList [] = [];

  private listaQuote: ListaQuote [] = [];

  // private getEmployee(): any {
  //   return from(employeeLists);
  // }

  constructor(private _http: HttpClient ) {
    //this.getEmployee().subscribe((data: any) => this.employeeList.push(data));
    // this.getCompetenzaList();
  }

  public getEmployeeList(): EmployeeList[] {
    return this.employeeList;
  }
  public getWorkers(page: number, page_items: number): Observable<Workers[]> {
    const queryParams = new HttpParams({
      fromObject: {
        page: page,
        page_items: page_items,
      }
    });
    return this._http.get<DataResponse<Workers[]>>(`${this.endpoint}/workers`, {
      params: queryParams
    }).pipe(
      tap(response => console.log(response)),
      map((resp) => resp.data as Workers[]),
    );
  }

  public getTotalWorkers(): Observable<number> {
    return this._http.get<DataResponse<number>>(`${this.endpoint}/workers`).pipe(
      //tap(resp => console.log(resp.total),
      map((resp) => resp.total as number),
    );
  }

  public getWorkerDetail(workerId: number) {
    /* const obs$ = this._http.get<DataResponse<WorkerDetail>>(`${this.endpoint}/workers/${workerId}`).pipe(
      //tap(response => console.log('WORKER DETAIL: '+ response)),
      map((resp) => resp.data),
    );

    return lastValueFrom(obs$); */

    return this._http.get<WorkerDetail>(`${this.endpoint}/workers/${workerId}`).pipe(
      //tap(response => console.log(response)),
      map((resp) => resp as WorkerDetail),
    );
  }

  public addWorker(worker: NewWorkersData): Observable<NewWorkersData> {
    return this._http.post<NewWorkersData>(`${this.endpoint}/workers/`, worker).pipe(
      tap((newWorker: NewWorkersData) => console.log(`added worker w/ id = ${newWorker.id}`)),
      map((resp) => resp as NewWorkersData),
    );
  }

  public updateWorker(worker: WorkerDetail): Observable<any> {
    return this._http.put(`${this.endpoint}/workers/${worker.id}`, worker).pipe(
      tap(response => console.log(response)),
      map((resp) => resp as WorkerDetail),
    );
  }

  // public getCompetenzaList(): CompetenzaList[] {
  //   return this.competenzaList;
  // }
  public getMansioneList(): MansioneList[] {
    return this.mansioneList;
  }

  // public getQuoteSocialiLavoratore(): ListaQuote[] {
  //   return this.listaQuote;
  // }
  
  public deleteEmployee(id: number): void {
    this.employeeList = this.employeeList.filter((CId) => CId.id !== id);
  }
  public addEmployee(employee: EmployeeList): void {
    this.employeeList.splice(0, 0, employee);
  }
  public updateEmployee(id: number, employee: EmployeeList): void {
    const element = this.employeeList.filter((x) => x.id === id);
    const index: number = this.employeeList.indexOf(element[0]);
    this.employeeList[index] = employee;
  }

}
