import { cleanup, render, screen } from '@solidjs/testing-library'

import { CryptoChart } from '../src/index'

describe('Crypto chart', () => {
  afterEach(cleanup)

  test(
    'initializes correctly',
    async () => {
      render(() => <CryptoChart pair="BTCUSDT" interval="1h" />)

      try {
        screen.getByTestId('crypto-chart')
      } catch (err) {
        if (!(err as Error).message.includes('Unable to find an element by: [data-testid="crypto-chart"]'))
          throw "crypto-chart shouldn't be rendered yet"
      }

      // await for fetching data
      await new Promise((r) => setTimeout(r, 5 * 1000))

      const chart = screen.getByTestId('crypto-chart')

      expect(chart).not.toBeEmptyDOMElement()
    },
    8 * 1000
  )
})
