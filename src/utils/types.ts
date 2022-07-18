import {
  CandlestickData,
  CandlestickStyleOptions,
  ChartOptions,
  DeepPartial,
  HistogramStyleOptions,
  SeriesOptionsCommon,
} from 'lightweight-charts'

export type KlinesRestData = [number, string, string, string, string, string]

export type KlinesWebSocketData = {
  k: { t: number; o: string; c: string; h: string; l: string; v: string; V: string }
}

export type HistogramConfig = DeepPartial<HistogramStyleOptions & SeriesOptionsCommon>

export type LightweightChartProps = {
  class?: string
  initialData?: CandlestickData[]
  updateData?: CandlestickData
  candleStickConfig: DeepPartial<CandlestickStyleOptions>
  histogramConfig: HistogramConfig
  chartLayout: {}
}

export type CryptoChartInterval =
  | '1m'
  | '5m'
  | '15m'
  | '30m'
  | '1h'
  | '2h'
  | '4h'
  | '6h'
  | '8h'
  | '12h'
  | '1d'
  | '3d'
  | '1W'
  | '1M'

export type CryptoChartProps = {
  class?: string
  pair: string
  interval: CryptoChartInterval
  candleStickConfig?: DeepPartial<CandlestickStyleOptions>
  histogramConfig?: HistogramConfig
  chartLayout?: DeepPartial<ChartOptions>
}
