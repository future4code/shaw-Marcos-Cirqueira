enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type CreateInputDTO = {
    photo: string
    description: string
    type: POST_TYPES
    created_at: string
}