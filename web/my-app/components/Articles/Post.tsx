import { urlFor } from '../../../../lib/sanity';
import { post } from './post-type';
import Image from 'next/image';

const Post = ({ post }: { post: post }) => {
    return (
        <li>
            <Image src={urlFor(post.image.asset._ref).url()} alt={post.header} width={500} height={500} />
            <p>DObrze</p>
        </li>
    )
}

export default Post;