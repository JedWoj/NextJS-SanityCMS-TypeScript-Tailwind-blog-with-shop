import { Slug, Image } from "../Articles/post-type"

type Child = {
    _key: string,
    _type: string,
    text: string,
    marks: [];
}

type Children = [Child]

type Desc = {
    _key: string,
    _type: string,
    style: string,
    markDefs: [],
    children: Children,
}

type Description = [Desc]

export type Product = {
    _id: string,
    description: Description,
    image: Image,
    price: number,
    slug: Slug,
    Name: string,
    gender: string,
    category: string,
}