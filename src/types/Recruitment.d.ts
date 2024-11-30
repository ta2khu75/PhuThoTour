interface Recruitment {
    id?: string;
    title: string
    fieldId: string;
    workplaceId: string;
    formOfWorkId: string;
    createdDate: Date;
    description: string;
    imageUrl?: string;
    status: boolean
    details: RecruitmentDetails[]
}