import { TemplateService } from "../../gen";
import l, { Localisation } from '../../localisation';
import { open } from "../OpenFile";
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

function handleResult(response: import("../../gen").TemplateDto[]): TemplateFacade[] {
    return response.map(template => { return {
        name: template.file.fileName,
        id: template.id,
        type: TemplateType.file,
        adminOnly: template.adminOnly
    }})
}

export function openFile(template: TemplateFacade) {
    TemplateService.get(template.id).then(response => open(response));
}

