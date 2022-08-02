import { urlFor } from '../../../../lib/sanity';
import { post } from './post-type';
import Image from 'next/image';

const Post = ({ post }: { post: post }) => {
    return (
        <li className='rounded-md bg-emerald-400'>
            <figure className='h-40 relative'>
                <Image layout='fill' objectFit='cover' className='rounded-t-md' src={urlFor(post.image.asset._ref).url()} alt={post.header} width={500} height={500} />
            </figure>
            <p>DObrze</p>
        </li>
    )
}

export default Post;