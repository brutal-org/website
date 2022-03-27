import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import matter from 'gray-matter'
import fs from 'node:fs/promises';
import Head from 'next/head';

function ActicleImage({ src, alt }) {
  if (alt === undefined)
    return <img className="rounded bg-white m-auto" src={src} alt="" />
  return (
    <figure>
      <img className="rounded bg-white m-auto" src={src} alt="" />
      <figcaption className='text-center'>{alt}</figcaption>
    </figure>
  );
}

const components = {
  img: (props) => <ActicleImage {...props} />
}

export default function Article({ id, source, frontMatter }) {
  return (
    <article className="max-w-prose m-auto prose prose-neutral dark:prose-invert ">
      <Head>
        <title>{frontMatter.title} - BRUTAL</title>

        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.subtitle} />
        <meta property="og:image" content={frontMatter.cover} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BRUTAL" />
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
  const legacy_paths = articles.map(article => ({ params: { article: (article + '.html').replace('-', '_') } }))
  paths.push(...legacy_paths)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let article = params.article.replace('.html', '').replace('_', '-')
  const source = await fs.readFile("public/articles/" + article + "/content.mdx")
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })
  return { props: { id: article, source: mdxSource, frontMatter: data } }
}