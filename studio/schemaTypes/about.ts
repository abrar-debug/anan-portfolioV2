import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster image',
      description: 'Shown before the video loads or while it buffers.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Who Am I',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptors',
      title: 'Descriptor list',
      description: 'Short bullet points, e.g. "UGC Creator".',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {media: 'posterImage', subtitle: 'heading'},
    prepare({media, subtitle}) {
      return {title: 'About', subtitle, media}
    },
  },
})
