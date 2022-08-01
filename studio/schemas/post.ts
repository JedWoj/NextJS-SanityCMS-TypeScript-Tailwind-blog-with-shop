export default {
    name: 'post',
    title: "Post",
    type: "document",
    fields: [
        {
            name: "author",
            title: 'authors name',
            type: 'string',
        }, 
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'header',
            title: 'Header',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'header',
                maxLength: 96
            }
        },
        {
            name: 'content',
            title: 'content',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                }
            ]
        }
    ]
}