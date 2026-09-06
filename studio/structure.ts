import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Hero')
        .id('hero')
        .child(S.document().schemaType('hero').documentId('hero')),
      S.listItem()
        .title('About')
        .id('about')
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Projects')
        .id('projects')
        .child(S.document().schemaType('projects').documentId('projects')),
      S.listItem()
        .title('Architecture')
        .id('scriptedPortfolio')
        .child(S.document().schemaType('scriptedPortfolio').documentId('scriptedPortfolio')),
      S.listItem()
        .title('Interior Design')
        .id('interiorPortfolio')
        .child(S.document().schemaType('interiorPortfolio').documentId('interiorPortfolio')),
      S.listItem()
        .title('Photography')
        .id('photographyPortfolio')
        .child(
          S.document().schemaType('photographyPortfolio').documentId('photographyPortfolio'),
        ),
      S.listItem()
        .title('Testimonials')
        .id('testimonials')
        .child(S.document().schemaType('testimonials').documentId('testimonials')),
      S.listItem()
        .title("Let's Work (+ site-wide contact info)")
        .id('cta')
        .child(S.document().schemaType('cta').documentId('cta')),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'hero',
            'about',
            'projects',
            'scriptedPortfolio',
            'interiorPortfolio',
            'photographyPortfolio',
            'testimonials',
            'cta',
          ].includes(item.getId() ?? ''),
      ),
    ])
