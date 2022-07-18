import { CandlestickData } from 'lightweight-charts'

import { KlinesRestData, KlinesWebSocketData } from './types'

export function klinesRestDataAdaptor(data: KlinesRestData): CandlestickData & { value: number } {
  const [
    openTime,
    open,
    high,
    low,
    close,
    volume,
    // closeTime,
    // quoteAssetVolume,
    // numberOfTrades,
    // takerBuyBaseAssetVolume,
    // takerBuyQuotessetVolume,
    // ignore,
  ] = data

  return {
    time: (openTime / 1000) as any,
    open: parseFloat(open),
    high: parseFloat(high),
    low: parseFloat(low),
    close: parseFloat(close),
    value: parseFloat(volume),
    color: open < close ? '#005a40' : '#82112b',
    // closeTime,
    // quoteAssetVolume,
    // numberOfTrades,
    // takerBuyBaseAssetVolume,
    // takerBuyQuotessetVolume,
    // ignore,
  }
}

export function klinesWebSocketDataAdaptor(data: KlinesWebSocketData): CandlestickData & { value: number } {
  const {
    k: { t, o, c, h, l, v, V },
  } = data

  return {
    open: parseFloat(o),
    high: parseFloat(h),
    low: parseFloat(l),
    close: parseFloat(c),
    time: (t / 1000) as any,
    value: (parseFloat(v) + parseFloat(V)) / 2,
    color: o < c ? '#005a40' : '#82112b',
  }
}
