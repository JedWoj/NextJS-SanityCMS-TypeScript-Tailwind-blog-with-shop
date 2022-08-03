import { post } from "./post-type";
// import { PortableText } from '@portabletext/react';
import Image from "next/image";
import { urlFor } from "../../../../lib/sanity";
import styles from './Article.module.scss';

const Article = ({ post }: { post: post[] }) => {
    const singlePost = post.at(0);
    const mapText = () => {
        const text = singlePost?.content.map(child => child.children[0].text).join('');
        return text;
    }

    return (
        <article className={`container mx-auto my-6 ${styles.article} border rounded shadow-2xl`}>
            <header className={`mx-12 xl:mx-32 2xl:mx-64 text-center overflow-hidden ${styles.article__header}`}>
                <h1 className="py-12 text-3xl lg:text-5xl gradient--text">
                    {singlePost?.header}
                </h1>
                <figure className='h-4/5 relative'>
                    <Image layout='fill' objectFit='cover' className='rounded-t-md' src={urlFor(singlePost?.image.asset._ref).url()} alt={singlePost?.header} />
                </figure>
            </header>
            <section className="mx-12 mt-6 xl:mx-32 2xl:mx-64 text-justify mb-12 gradient--text font-semibold">
                {mapText()}
            </section>
            {/* <PortableText value={singlePost?.content} /> */}
        </article>
    )
}

export default Article;