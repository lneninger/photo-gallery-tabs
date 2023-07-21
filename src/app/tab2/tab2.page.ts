import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GalleryService } from '../shared/camera/gallery.service';
import { Photo } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  providers: [GalleryService],
  imports: [IonicModule]
})
export class Tab2Page {
  photos: any;

  constructor(private service: GalleryService) { }

  async ngOnInit(): Promise<void> {
    this.service.takePhoto();
  }

  async takePhoto() {
    const photo = await this.service.takePhoto();
    // const fileName = Date.now() + '.jpeg';
    // this.savePicture(photo, fileName);
  }
/*
  async savePicture(photo: Photo, fileName: string): Promise<UserPhoto> {
    const base64Data = await this.base64FromPath(photo.webPath!);
    const savedFile = await FileSystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }

  async base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject('method did not return a string');
        }
      };
      reader.readAsDataURL(blob);
    });
  }
  */

}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
