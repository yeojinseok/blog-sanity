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
  ],
}
