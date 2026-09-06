import {defineField, defineType} from 'sanity'

export const photographyPortfolio = defineType({
  name: 'photographyPortfolio',
  title: 'Photography',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'Line breaks are preserved on the site.',
      type: 'text',
      rows: 2,
      initialValue: 'Photography',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Gallery items',
      type: 'array',
      of: [{type: 'portfolioItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {heading: 'heading', items: 'items'},
    prepare({heading, items}) {
      return {
        title: heading || 'Photography',
        subtitle: items?.length ? `${items.length} items` : 'No items yet',
      }
    },
  },
})
