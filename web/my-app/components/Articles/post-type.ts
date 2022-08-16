export type Slug = {
    _type: string,
    current: string,
}

type Asset = {
    _ref: string,
    _type: string
}

export type Image = {
    _type: string,
    asset: Asset
}

type Children = {
    _key: string,
    _type: string,
    text: string;
    marks: [];
}

type Block = {
    _key: string,
    type: string,
    children: Children[];
}

type Content = {
    content: Block[];
    children: Children[];
}

export type post = {
    author: string,
    header: string,
    slug: Slug,
    _id: string,
    image: Image,
    content: Content[];
}