import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Project list',
      description: 'Text items that scroll automatically, e.g. project or brand names.',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'captionCount',
      title: 'Caption count',
      description: 'The number shown in "(100 projects & still learning more)".',
      type: 'string',
      initialValue: '100',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'captionSuffix',
      title: 'Caption suffix',
      description: 'Replaces "still learning more" in the caption.',
      type: 'string',
      initialValue: 'still learning more',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      return {
        title: 'Projects',
        subtitle: items?.length ? `${items.length} items` : 'No items yet',
      }
    },
  },
})
