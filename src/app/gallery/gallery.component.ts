import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  appList: any[] = [{
    "url": "../../assets/images/pngtree-cartoon-computer-online-learning-class-illustration-png-image_2221462.jpg"
  },
  {
    "url": "../../assets/images/pngtree-live-class-online-class-image_2248252.jpg"
  },
  {
    "url": "../../assets/images/pngtree-online-class-with-computer-video-conference-png-image_3610529.jpg"
  },
  {
    "url": "../../assets/images/pngtree-teacher-explaining-theory-online-class-png-image_3765861.jpg"
  },
  {
    "url": "../../assets/images/pngtree-live-class-online-class-image_2248252.jpg"
  },
  {
    "url": "../../assets/images/pngtree-online-class-with-computer-video-conference-png-image_3610529.jpg"
  }];
}
