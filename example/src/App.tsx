import { createSignal } from 'solid-js'

import { CryptoChart } from '../../src/index'
import './index.css'

function App() {
  const [toggle, setToggle] = createSignal(true)

  return (
    <>
      <button class="pair-toggle-btn" onClick={() => setToggle((prev) => !prev)}>
        TOGGLE PAIR ETH/BTC
      </button>

      <CryptoChart class="chart" pair={toggle() ? 'BTCUSDT' : 'ETHUSDT'} interval="1h" />
    </>
  )
}

export default App
