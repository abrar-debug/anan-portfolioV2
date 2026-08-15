import {defineField, defineType} from 'sanity'

export const scriptedPortfolio = defineType({
  name: 'scriptedPortfolio',
  title: 'Architecture',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'Line breaks are preserved on the site.',
      type: 'text',
      rows: 2,
      initialValue: 'Architecture',
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
        title: heading || 'Architecture',
        subtitle: items?.length ? `${items.length} items` : 'No items yet',
      }
    },
  },
})
