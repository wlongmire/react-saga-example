export class BiodriveListItemInfo {
    id: string;
    date: Date;
    header: string;
    subheader: string;
    description?: string;
    entityType: string;

    constructor(entityType: string, id: string, date: Date, header: string, subheader: string, description?: string) {
        this.entityType = entityType;
        this.id = id;
        this.date = date;
        this.header = header;
        this.subheader = subheader;
        this.description = description;
    }
}