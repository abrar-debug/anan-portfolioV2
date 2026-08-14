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
      ...S.documentTypeListItems().filter(
        (item) => !['hero', 'about'].includes(item.getId() ?? ''),
      ),
    ])
