export interface Book {

    bookId: number;
    bookName: string;
    writerId: number;
    publishingDate: Date;
    categoryID: number;
    ageId: number;
    copies: number;
    copiesInLibrary: number;
    availabloToBorrow: boolean;
}