import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tech'}}],
    }),
    defineField({
      name: 'dateRange',
      title: 'Date Range',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'dateRange',
      media: 'mainImage',
    },
    prepare(selection) {
      const {date} = selection
      return {...selection, subtitle: `Worked on ${date}`}
    },
  },
})
