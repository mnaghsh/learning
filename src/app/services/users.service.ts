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

  constructor(public configService:ConfigService) { }


  public selectAllListOfcheckLists(): Observable<any> {
    return this.configService.get('HseECheckLists');
  }

}

