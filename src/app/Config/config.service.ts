import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public API_ENDPOINT = 'http://192.168.43.212:5000';

  public API_ENDPOINT_NAMES = {
    blogall: '/blogall',
    login: '/login',
    blogadd: '/blogadd',
    blogupdate: '/blogupdate',
    blogdelete: '/blogdelete',
    relatedblog: '/relatedblog',
    blogpost: '/blogpost',
    contactus: '/contactus',
  };

  constructor() { }
}
