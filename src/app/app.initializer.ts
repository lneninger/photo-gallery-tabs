import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IInitializerModel } from './shared/_initializer/initializer.models';

export class AppInitializer {
  static data: IInitializerModel;

  static async initializeApp(http: HttpClient): Promise<any> {

    const url = `${environment.apiBaseUrl}/getConfig`;
    try {
      const result = await firstValueFrom(http.get<IInitializerModel>(url));
      AppInitializer.data = result;
    } catch (e) {
      console.log
    }
  }
}
