import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public configService:ConfigService) { }


  public selectAllListOfcheckListsOptions(): Observable<any> {
    return this.configService.get('HseECheckListOptions');
  }

}

