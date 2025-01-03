
// sanity/blog.ts
export const blog = {
    name: 'blog',
    type: 'document',
    title: 'blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of the blog'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your article',
            options:{
                source:'title',
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Post image',
        },
        {
            name:'smallDescription',
            type:'text',
            title:"Small Description"
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {
                    type:'block'
                }
            ]
        }
    ]
}