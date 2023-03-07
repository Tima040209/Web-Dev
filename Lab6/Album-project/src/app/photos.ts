export interface photos{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
    slice(arg0: number, arg1: number): photos;
}