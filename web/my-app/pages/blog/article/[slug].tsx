import { sanityClient } from "../../../../../lib/sanity";
import { post } from "../../../components/Articles/post-type";
import { GetStaticProps } from "next";
import Article from "../../../components/Articles/Article";

const ArticlePage = ({ post }: { post: post[] }) => {
    return (
        <div className="text-black">
            <Article post={post} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug;
    const postQuery = ` *[_type == 'post' && slug.current == '${slug}'] {
      header,
      _id,
      author,
      slug,
      image,
      content
    }`;

    const post = await sanityClient.fetch(postQuery);
    return { props: { post }, revalidate: 1800 }
}

export const getStaticPaths = async () => {
    const paths = await sanityClient.fetch(
        `*[_type == 'post' && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    );

    return {
        paths,
        fallback: true
    };
}

export default ArticlePage;