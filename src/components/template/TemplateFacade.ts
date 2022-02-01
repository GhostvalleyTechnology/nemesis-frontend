import { TemplateService } from "../../gen";
import l, { Localisation } from '../../localisation';
let $l: Localisation;
l.subscribe(loc => $l = loc);

export type TemplateFacade = {
    name: string;
    path?: string;
    id?: number;
    type: TemplateType;
    adminOnly: boolean;
}

export enum TemplateType {
    file = "File", 
    page = "Page"
}

const needsAssessment: TemplateFacade = {
    name: $l.needsAssessment.title,
    type: TemplateType.page,
    path: "/needs_assessment",
    adminOnly: false
}

export async function list(): Promise<TemplateFacade[]> {
    const response = await TemplateService.list();
    let result = handleResult(response);
    result.push(needsAssessment)
    return result;
}

function handleResult(response: import("../../gen").Template[]): TemplateFacade[] {
    return response.map(template => { return {
        name: template.fileName,
        id: template.id,
        type: TemplateType.file,
        adminOnly: template.adminOnly
    }})
}

export function openFile(template: TemplateFacade) {
    TemplateService.get(template.id).then(response => openPdf(response));
}

function openPdf(response: string) {
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