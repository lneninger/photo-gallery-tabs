import { HttpClient } from '@angular/common/http';

export class AppInitializer{
  constructor(http: HttpClient) {
    return () => http.get(`${}/assets/countries.json`).toPromise().then(data => {
      console.log(data);
      return data;
    });
  }
}
