export class CuboUser {
    constructor(
        public id: string,
        public first_name: string,
        public last_name: string,
        public participation: number

    ) { }
}

export interface CuboUserDTO {
    first_name: string,
    last_name: string,
    participation: number


}