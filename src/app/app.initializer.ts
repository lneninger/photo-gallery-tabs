import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AppInitializer{
  static data: Object;

  static async initializeApp(http: HttpClient): Promise<any> {
    AppInitializer.data = await firstValueFrom(http.get(`${environment.apiBaseUrl}/config`));
  }
}
