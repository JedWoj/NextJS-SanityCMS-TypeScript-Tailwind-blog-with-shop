import { sanityClient } from '../../../../lib/sanity';
import Post from '../../components/Articles/Post';
import { post } from '../../components/Articles/post-type';

type Props = {
    posts: post[];
}

const allBlogPostsPage = ({ posts }: Props) => {
    return (
        <div className='container mx-auto'>
            <ul className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3'>
                {posts.map(post => <Post key={post._id} post={post} />)}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
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