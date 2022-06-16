import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './services/config.service';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private configService: ConfigService) {

  

  }

  public selectAllListOfcheck(): Observable<any> {
    return this.configService.get('HseECheckLists');
  }

  public insertAllListOfcheck(body:any): Observable<any> {
    return this.configService.post('HseECheckLists',body);
  }


}
