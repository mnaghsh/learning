import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectAllListOfcheckListsOptions() {
    throw new Error('Method not implemented.');
  }

  constructor(public configService: ConfigService) { }

  public selectAllListOfclients(): Observable<any> {
    return this.configService.get('Clients');
  }

  public insertAllListOfclients(body: any): Observable<any> {
    return this.configService.post('Clients', body);
  }
  public updateListOfclients(id: any, body: any): Observable<any> {
    return this.configService.put('Clients/' + id, body);
  }

  public deleteClients(id:any):Observable<any>{
    return this.configService.delete('Clients/'+id);
  }

}

