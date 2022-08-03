import { type } from "os"

type slug = {
    _type: string,
    current: string,
}

type asset = {
    _ref: string,
    _type: string
}

type image = {
    _type: string,
    asset: asset
}

type children = {
    _key: string,
    _type: string,
    text: string;
    marks: [];
}

type block = {
    _key: string,
    type: string,
    children: children[];
}

type content = {
    content: block[];
    children: children[];
}

export type post = {
    author: string,
    header: string,
    slug: slug,
    _id: string,
    image: image,
    content: content[];
}