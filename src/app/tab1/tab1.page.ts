import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GalleryService } from '../shared/camera/gallery.service';
import { GalleryImageOptions, GalleryPhoto } from '@capacitor/camera';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  providers: [GalleryService],
  imports: [IonicModule, CommonModule],
})
export class Tab1Page implements OnInit {
  pictures: GalleryPhoto[] = [];
  constructor(private service: GalleryService) { }

  async ngOnInit(): Promise<void> {
    this.pictures = (await this.service.openGallery()).photos;
  }

  async selectPictures() {
    const options: GalleryImageOptions = {
      width: 50,
      height: 50
    };
    this.pictures = (await this.service.openGallery(options)).photos;
    // const fileName = Date.now() + '.jpeg';
    // this.savePicture(photo, fileName);
  }

}
