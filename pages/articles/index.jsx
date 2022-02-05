import matter from 'gray-matter'
import Head from 'next/head';
import Link from 'next/link';
import fs from 'node:fs';

function ArticleCard({ post }) {
    return <Link href="/articles/[article]" as={`/articles/${post.id}`}>
        <div key={post.id} className='overflow-hidden sep-all rounded cursor-pointer'>
            <img className='sep-bottom' src={post.cover}></img>
            <div className='p-4'>
                <div className="text-2xl font-bold">{post.title}</div>
                <div className="text-xl">{post.subtitle}</div>
            </div>
        </div>
    </Link>
}

export default function PostList({ posts }) {
    return (
        <div className="max-w-prose m-auto px-4">
            <Head>
                <title>Blog - BRUTAL</title>
            </Head>
            <h1 className="font-extrabold text-4xl pb-8">Posts</h1>
            <div className='flex flex-col gap-8'>
                {posts.map(post => (
                    <ArticleCard key={post.id} post={post} />
                ))}

            </div>
        </div>
    )
}


export function getStaticProps() {
    const files = fs.readdirSync('public/articles/')
    const posts = files.map(file => {
        const source = fs.readFileSync("public/articles/" + file + "/content.mdx")
        const { data } = matter(source)
        return {
            id: file.replace(/\.mdx$/, ''),
            ...data
        }
    }).sort((a, b) => a.date.localeCompare(b.date)).reverse()


    return {
        props: {
            posts
        }
    }
}