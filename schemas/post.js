export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'markdown',
    },
    {
      title: 'ImageURL',
      name: 'imageURL',
      type: 'image',
    },
    {
      title: 'Views',
      name: 'views',
      type: 'number',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'number',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
