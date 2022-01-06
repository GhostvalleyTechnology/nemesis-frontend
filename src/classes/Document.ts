import { DocumentType } from "./DocumentType";

export class Document {
    id: number;
    name: string;
    type: DocumentType;
    signed: boolean;
    contractor: string;
    date: string;

    static fromClient(clientId: number): Document[] {
        return [...Array(9).keys()].map(index => {
            let doc = new Document();
            doc.id = index;
            doc.date = "2021-09-0"+(index+1);
            doc.name = "Doc "+index;
            doc.contractor = "Contractor "+index;
            doc.signed = index < 6;
            if(index % 2 == 0) {
                doc.type = DocumentType.contract;
            } else {
                doc.type = DocumentType.generic;
            }
            return doc;
        });
    }
}