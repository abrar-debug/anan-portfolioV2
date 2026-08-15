import {defineField, defineType} from 'sanity'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio item',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
