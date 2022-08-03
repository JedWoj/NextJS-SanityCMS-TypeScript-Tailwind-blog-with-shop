import { useState } from 'react';
import { sanityClient } from '../../../../lib/sanity';
import Post from '../../components/Articles/Post';
import { post } from '../../components/Articles/post-type';
import Pagination from '../../components/UI/Pagination';

type Props = {
    posts: post[];
}

const allBlogPostsPage = ({ posts }: Props) => {
    const [activePage, setActivepage] = useState(0);

    const renderPosts = () => {
        const paginatedPosts = posts.slice(activePage * 6, activePage * 6 + 6);
        return paginatedPosts.map(post => <Post key={post._id} post={post} />)
    }

    return (
        <div className='container mx-auto'>
            <ul className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3'>
                {renderPosts()}
            </ul>
            <Pagination page={activePage} setPage={setActivepage} quantity={posts.length} />
        </div>
    )
}

export const getStaticProps = async () => {
    const postsQuery = ` *[_type == 'post'] {
      header,
      _id,
      author,
      slug,
      image
    }`;

    const posts = await sanityClient.fetch(postsQuery);
    return { props: { posts } }
}

export default allBlogPostsPage;