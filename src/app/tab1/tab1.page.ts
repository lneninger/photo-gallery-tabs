import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { GalleryService } from '../shared/camera/gallery.service';
import { GalleryPhoto } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  providers: [GalleryService],
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page implements OnInit {
  pictures: GalleryPhoto[] = [];
  constructor(private service: GalleryService) { }

  async ngOnInit(): Promise<void> {
    this.pictures = (await this.service.openGallery()).photos;
  }

  async selectPictures() {
    this.pictures = (await this.service.openGallery()).photos;
    // const fileName = Date.now() + '.jpeg';
    // this.savePicture(photo, fileName);
  }

}
