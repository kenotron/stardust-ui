import { List } from '@stardust-ui/react'

const selectors = {
  list: `.${List.className}`,
  item: (itemIndex: number) =>
    `.${List.className} .${List.Item.className}:nth-of-type(${itemIndex})`,
}

const config: ScreenerTestsConfig = {
  steps: [
    builder =>
      builder
        .hover(selectors.item(2))
        .snapshot('Highlights an item')
        .click(selectors.item(2))
        .snapshot('Selects an item')
        .hover(selectors.item(3))
        .snapshot('Highlights another item'),
  ],
}

export default config