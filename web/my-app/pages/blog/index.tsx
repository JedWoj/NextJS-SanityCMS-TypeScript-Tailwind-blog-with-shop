import { sanityClient } from '../../../../lib/sanity';
import Post from '../../components/Articles/Post';
import { post } from '../../components/Articles/post-type';

type Props = {
    posts: post[];
}

const allBlogPostsPage = ({ posts }: Props) => {
    return (
        <div>
            <ul>
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