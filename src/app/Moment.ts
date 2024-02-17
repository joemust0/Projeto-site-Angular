export interface Moment {
    id?: number;
    title: string,
    descrição: string,
    image: string,
    created_at?: string,
    update_at?: string,
    comments?:[{ text: string; username: string }];
}