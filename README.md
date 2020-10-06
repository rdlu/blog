# Moonset Blog Starter Theme

It's a heavily modified blog starter from [Vercel](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript, Tailwind CSS, React, Remark.

[Demo here](https://demo-blog.vercel.app/)

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## How to use

## Deploy your own

# Notes
