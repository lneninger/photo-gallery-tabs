import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IInitializerModel } from './shared/_initializer/initializer.models';

export class AppInitializer{
  static data: IInitializerModel;

  static async initializeApp(http: HttpClient): Promise<any> {
    AppInitializer.data = await firstValueFrom(http.get<IInitializerModel>(`${environment.apiBaseUrl}/getConfig`));
}
}
