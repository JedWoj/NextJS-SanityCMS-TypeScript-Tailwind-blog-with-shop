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

export type post = {
    author: string,
    header: string,
    slug: slug,
    _id: string,
    image: image,
}