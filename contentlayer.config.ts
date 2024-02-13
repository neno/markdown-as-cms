import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { allPosts } from '.contentlayer/generated'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

const posts = allPosts;

export default makeSource({
  contentDirPath: 'src/content/posts',
  documentTypes: [Post],
})
