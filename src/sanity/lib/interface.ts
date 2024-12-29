export interface simpleBlogCard{
    title:string,
    smallDescription:string,
    currentSlug:string,
    titleImage:any
};

export interface fullBlog {
    [x: string]: any
    currentSlug:string,
    title:string,
    content:any,
    titleImage:any
}