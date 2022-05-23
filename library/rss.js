import { Feed } from "feed";
import { getBlogPostsData } from "./getPostData";
import fs from "fs";

function romanize(num) { // https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

function romanYear() {
  const date = new Date();
  let currentYear = date.getFullYear();

  return romanize(currentYear);
}

export const generateRssFeed = async () => {
  const posts = await getBlogPostsData();
  const siteURL = "https://brutal.smnx.sh";
  const date = new Date()
  const author = {
    name: "Brutal",
  };

  const feed = new Feed({
    title: "Brutal Blog",
    description: "",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.svg`,
    favicon: `${siteURL}/favicon.svg`,
    copyright: `Copyright © ${romanYear()} The BRUTAL contributors.`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/articles/${post.slug}`;

    let authors = [];
    for (let i in post.authors) { authors.push({ name: post.authors[i] }); }

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.subtitle,
      content: post.content,
      author: authors,
      image: `${siteURL}${post.cover}`,
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};
