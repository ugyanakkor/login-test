import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-image-upload",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageUploadComponent {
  public fileName = new BehaviorSubject<string>("");

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    const file: File = input?.files[0];

    if (file) {
      this.fileName.next(file.name);
      const formData = new FormData();
      formData.append("image", file);
      /*
      Don't have endpoint for file upload, a Post request should upload the selected file via httpClient

      const upload = this.http.post("/api/endpoint", formData);
      upload.subscribe();
      */
    }
  }
}
