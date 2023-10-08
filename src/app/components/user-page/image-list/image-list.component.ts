import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Image } from "./image-list.interface";

@Component({
  selector: "app-image-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageListComponent {
  public images: Array<Image> = [
    { id: 1, src: "assets/angularJS.png", alt: "AngularJS" },
    { id: 2, src: "assets/reactJS.png", alt: "ReactJS" },
    { id: 3, src: "assets/vueJS.png", alt: "VueJS" },
  ];

  public delete(index: number): void {
    this.images.splice(index, 1);
  }

  public identify(index: number, image: Image): number {
    return image.id;
  }
}
