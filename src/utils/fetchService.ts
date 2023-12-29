import { CandlestickData } from 'lightweight-charts'

import { klinesRestDataAdaptor, klinesWebSocketDataAdaptor } from './adaptor'
import { REST_URL, WS_URL } from './constants'
import { CryptoChartInterval, KlinesRestData } from './types'

export const fetchKlinesRestData = async (symbol: string, interval: CryptoChartInterval) => {
  const result = await fetch(`${REST_URL}symbol=${symbol}&interval=${interval}`, {
    headers: { 'Content-Type': 'application/json' },
  })
  console.log('🚀 ~ file: fetchService.ts:12 ~ fetchKlinesRestData ~ result:', JSON.stringify(result, null, 3))
  const data: KlinesRestData[] = await result.json()

  return data.map(klinesRestDataAdaptor)
}

export function listenKlinesWebSocketData(
  pair: string,
  interval: CryptoChartInterval,
  onData: (data: CandlestickData) => void
) {
  const ws = new WebSocket(`${WS_URL}/${pair.toLocaleLowerCase()}@kline_${interval}`)
  ws.onmessage = (e) => {
    const message = JSON.parse(e.data)
    const parsedMessage = klinesWebSocketDataAdaptor(message)
    onData(parsedMessage)
  }

  return () => (ws.readyState == ws.OPEN ? ws.close() : (ws.onopen = () => ws.close()))
}
