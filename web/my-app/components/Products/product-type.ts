import { slug, image } from "../Articles/post-type"

type child = {
    _key: string,
    _type: string,
    text: string,
    marks: [];
}

type children = [child]

type desc = {
    _key: string,
    _type: string,
    style: string,
    markDefs: [],
    children: children,
}

type description = [desc]

export type product = {
    _id: string,
    description: description,
    image: image,
    price: number,
    slug: slug,
    Name: string,
}