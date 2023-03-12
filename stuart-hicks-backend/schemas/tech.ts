import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'techIconData',
      title: 'Tech Icon',
      type: 'techIconObject',
    }),
  ],
})
