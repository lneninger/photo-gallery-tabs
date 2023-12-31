
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, GalleryPhotos, GalleryImageOptions, ImageOptions, Photo } from '@capacitor/camera';

@Injectable()
export class GalleryService{
  constructor(){}

  async takePhoto (): Promise<Photo> {
    const options: ImageOptions = {
      quality: 90,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.Uri
    };
    return  await Camera.getPhoto(options);
  }

  async openGallery (options?: GalleryImageOptions): Promise<GalleryPhotos> {
    options = {


      ...options
    };
    return  await Camera.pickImages(options);
  }
}
