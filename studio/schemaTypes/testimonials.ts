import {defineField, defineType} from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'portraitImage',
      title: 'Portrait image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      description:
        'Three lines, e.g. "What are" / "People saying" / "About me?!?!". Line breaks are preserved on the site.',
      type: 'text',
      rows: 3,
      initialValue: 'What are\nPeople saying\nAbout me?!?!',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonialItem',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'company'},
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {media: 'portraitImage', items: 'items'},
    prepare({media, items}) {
      return {
        title: 'Testimonials',
        subtitle: items?.length ? `${items.length} testimonials` : 'No testimonials yet',
        media,
      }
    },
  },
})
