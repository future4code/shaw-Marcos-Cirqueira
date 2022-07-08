import { v4 } from "uuid";

export class Generator{
    public generateId(): string{
        return v4()
    }
}
