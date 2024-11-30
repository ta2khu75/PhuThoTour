// global.d.ts
export { }; // Đảm bảo tệp này được coi là module

declare global {
    interface Blog {
        id?: string
        title: string;
        topicIds: string[];
        createdDate: Date | Timestamp;
        imageUrl?: string;
        documentUrl?: string;
        view: number;
        content: string;
        accountId: string;
    }
    interface Recruitment {
        id?: string;
        title: string
        fieldId: string;
        workplaceId: string;
        formOfWorkId: string;
        createdDate: Date | Timestamp;
        description: string;
        imageUrl?: string;
        status: boolean
        details: RecruitmentDetails[]
    }
    interface Documentt {
        id?: string;
        title: string;
        createdDate: Date | Timestamp;
        fileUrl?: string;
    }
}
