enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }

export default class Post{
    constructor(
        private id:string,
        private photo:string,
        private description:string,
        private type: POST_TYPES,
        private createdAt:string,
        private authorId: string
    ){}
}