import {defineField, defineType} from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: "Let's Work",
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'Line breaks are preserved on the site.',
      type: 'text',
      rows: 2,
      initialValue: "Let's\nWork",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'polaroidImage',
      title: 'Polaroid image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandName',
      title: 'Brand name',
      description: 'Used site-wide: the header logo text and here.',
      type: 'string',
      initialValue: 'Anan Hoque Creative',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Contact email',
      description: 'Used site-wide for every "Email Me" link and contact text.',
      type: 'string',
      initialValue: 'nikizamora.business@gmail.com',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Booking link',
      description: 'Used site-wide for every "Book a Call" link.',
      type: 'url',
      initialValue: 'https://calendly.com/nikizamoraugc/ugc-consultation',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {media: 'polaroidImage', email: 'email'},
    prepare({media, email}) {
      return {title: "Let's Work", subtitle: email, media}
    },
  },
})
