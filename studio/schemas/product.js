export default {
    name: 'product',
    title: "Product",
    type: "document",
    fields: [
        {
            name: "Name",
            title: 'products name',
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
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'Name',
                maxLength: 96
            }
        },
        {
            name: 'description',
            title: 'description',
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