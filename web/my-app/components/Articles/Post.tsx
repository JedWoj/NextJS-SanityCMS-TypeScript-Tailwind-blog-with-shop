import { urlFor } from '../../../../lib/sanity';
import { post } from './post-type';
import Image from 'next/image';
import Link from 'next/link';

const Post = ({ post }: { post: post }) => {
    return (
        <Link href={`blog/article/${post.slug.current}`}>
            <li className='mx-6 sm:mx-0 rounded-md gradient text-white'>
                <figure className='h-64 sm:h-50 relative'>
                    <Image layout='fill' objectFit='cover' className='rounded-t-md' src={urlFor(post.image.asset._ref).url()} alt={post.header} width={500} height={500} />
                </figure>
                <section className='p-6'>
                    <h2 className='text-xl font-semibold'>
                        {post.header}
                    </h2>
                    <p className='mt-2 text-right'>
                        {post.author}
                    </p>
                </section>
            </li>
        </Link>
    )
}

export default Post;