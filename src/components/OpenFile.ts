import { FileDto } from "../gen";

export function hasFile(fileId?: number) {
  return fileId !== undefined && fileId !== null && fileId > 0;
}

export function open(dto: FileDto) {
  var byteCharacters = atob(dto.data);
  var byteNumbers = new Array(byteCharacters.length);
  for (var i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  var byteArray = new Uint8Array(byteNumbers);
  var file = new Blob([byteArray], { type: dto.extension+';base64' });
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
}