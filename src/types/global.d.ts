import { DocumentReference, Timestamp } from "firebase/firestore";

// global.d.ts
export { }; // Đảm bảo tệp này được coi là module

declare global {
    interface Blog {
        id?: string
        title: string;
        createdDate: Date | Timestamp;
        imageUrl?: string;
        documentUrl?: string;
        views: number;
        content: string;
        topics: DocumentReference[],
        topicIds: string[];
        account?: DocumentReference
        accountId?: string;
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
    interface Apply {
        id?: string;
        recruitmentId: string;
        name: string;
        gender: boolean;
        birthDay: string;
        placeOfBirth: string;
        currentResidence: string;
        phone: string;
        email: string;
        facebook: string;
        level: string;
        cvUrl: string;
        collaborate: ApplyOptions;
        overtime: ApplyOptions;
        oldWorkplace: string;
        myLevel: string;
        createdDate: Date | Timestamp;
    }
}
