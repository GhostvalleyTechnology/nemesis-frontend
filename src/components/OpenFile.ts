import { FileDto } from "../gen";

export function openPdf(response: string) {
  // Buffer.from(data, 'base64')
  var byteCharacters = atob(response);
  var byteNumbers = new Array(byteCharacters.length);
  for (var i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  var byteArray = new Uint8Array(byteNumbers);
  var file = new Blob([byteArray], { type: 'application/pdf;base64' });
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
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