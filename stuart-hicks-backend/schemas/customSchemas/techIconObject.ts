import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'techIconObject',
  title: 'Tech Icon Object',
  type: 'object',
  fields: [
    defineField({
      name: 'techIcon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altText',
      title: 'Alternative text',
      description: 'This is required for people who rely on screen readers and SEO.',
      type: 'string',
    }),
  ],
})
