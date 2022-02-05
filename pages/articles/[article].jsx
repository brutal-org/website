import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import matter from 'gray-matter'
import fs from 'node:fs/promises';
import Head from 'next/head';

const components = {
  img: (props) => <img {...props} className="rounded bg-white m-auto" />
}

export default function Article({ source, frontMatter }) {
  return (
    <article className="max-w-prose m-auto prose prose-neutral dark:prose-invert ">
      <Head>
        <title>{frontMatter.title} - BRUTAL</title>
      </Head>

      <img className='rounded shadow-2xl' src={frontMatter.cover}></img>
      <h1>{frontMatter.title} <div className="font-bold">{frontMatter.subtitle}</div></h1>
      <MDXRemote {...source} components={components} />
    </article>
  )
}

export async function getStaticPaths() {
  const articles = await fs.readdir('public/articles/')

  const paths = articles.map(article => ({ params: { article } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const source = await fs.readFile("public/articles/" + params.article + "/content.mdx")
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })
  return { props: { source: mdxSource, frontMatter: data } }
}