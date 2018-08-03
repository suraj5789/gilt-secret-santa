/**
 * User Model
 */
export class User {
    public guid: string;
    public name: Name;
    public email: string;
    public phone: number;
}

export class Name {
    public first: string;
    public last: string;
}