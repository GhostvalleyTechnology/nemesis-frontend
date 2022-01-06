import { TemplateType } from "./TemplateType";

export type Template = {
    name: string;
    path: string;
    type: TemplateType;
    adminOnly: boolean;
}

export function getTemplates(): Template[] {
    let needsAssessment: Template = {
        name: "Needs Assessment",
        type: TemplateType.page,
        path: "/needs_assessment",
        adminOnly: false
    }
    return [needsAssessment];
} 