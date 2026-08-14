import { Studio } from 'sanity'
import { ThemeProvider } from '@sanity/ui'
import { buildTheme } from '@sanity/ui/theme'
import sanityConfig from 'sanity-studio-config'

/**
 * `studioTheme` is a legacy v1 object — its `.v2` property is undefined, which causes
 * styled-components inside Studio to crash with "Cannot read properties of undefined (reading 'v2')".
 * `buildTheme()` constructs a complete theme with `.v2` populated, so all Sanity UI components
 * can read the values they need.
 */
const theme = buildTheme()

export function EmbeddedSanityStudio() {
  return (
    <ThemeProvider theme={theme}>
      <Studio config={sanityConfig} />
    </ThemeProvider>
  )
}
