import { CandlestickData } from 'lightweight-charts'
import { createEffect, createSignal, onCleanup } from 'solid-js'

import { LightweightChart } from './LightweightChart'
import { candleStickDefaultConfig, defaultChartLayout, histogramDefaultConfig } from './utils/constants'
import { fetchKlinesRestData, listenKlinesWebSocketData } from './utils/fetchService'
import { CryptoChartProps } from './utils/types'

export function CryptoChart(props: CryptoChartProps) {
  const [initialData, setInitialData] = createSignal<CandlestickData[]>()
  const [updateData, setUpdateData] = createSignal<CandlestickData>()

  let webSocketDisposer: VoidFunction

  createEffect(() => {
    webSocketDisposer?.call(null)

    fetchKlinesRestData(props.pair, props.interval).then(setInitialData)
    webSocketDisposer = listenKlinesWebSocketData(props.pair, props.interval, setUpdateData)
  })

  onCleanup(() => webSocketDisposer?.call(null))

  return (
    <LightweightChart
      class={props.class}
      updateData={updateData()}
      initialData={initialData()}
      candleStickConfig={props.candleStickConfig ?? candleStickDefaultConfig}
      histogramConfig={props.histogramConfig ?? histogramDefaultConfig}
      chartLayout={props.chartLayout ?? defaultChartLayout}
    />
  )
}
