import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/png',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'signatureImage',
      title: 'Signature image',
      type: 'image',
      options: {
        accept: 'image/png',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
      description: 'Line breaks are preserved on the site, e.g. "Practicing" / "Architect".',
      initialValue: 'Practicing\nArchitect',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {media: 'mainImage', subtitle: 'subheading'},
    prepare({media, subtitle}) {
      return {title: 'Hero', subtitle, media}
    },
  },
})
