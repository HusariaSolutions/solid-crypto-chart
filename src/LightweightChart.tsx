import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts'
import { createEffect, onCleanup, onMount } from 'solid-js'

import { LightweightChartProps } from './utils/types'

export function LightweightChart(props: LightweightChartProps) {
  let resizeObserver: ResizeObserver
  let chartContainerRef: HTMLDivElement
  let chart: IChartApi
  let candleSeries: ISeriesApi<'Candlestick'>
  let volumeSeries: ISeriesApi<'Histogram'>

  createEffect(() => {
    if (!props.initialData || !chart) return

    if (candleSeries) {
      chart.removeSeries(candleSeries)
      chart.removeSeries(volumeSeries)
    }

    candleSeries = chart.addCandlestickSeries(props.candleStickConfig)
    volumeSeries = chart.addHistogramSeries(props.histogramConfig)

    candleSeries.setData(props.initialData)
    candleSeries.applyOptions({
      priceFormat: {
        type: 'price',
        precision: 5,
        minMove: 0.001,
      },
    })

    volumeSeries.setData(props.initialData)
  })

  createEffect(() => {
    if (!props.updateData) return

    candleSeries?.update(props.updateData)
    volumeSeries?.update(props.updateData)
  })

  onMount(() => {
    chart = createChart(chartContainerRef, {
      width: chartContainerRef.clientWidth,
      height: chartContainerRef.clientHeight,
      ...props.chartLayout,
    })

    resizeObserver = new ResizeObserver(
      ([
        {
          contentRect: { width, height },
        },
      ]) => chart.resize(width, height)
    )

    resizeObserver.observe(chartContainerRef)
  })

  onCleanup(() => resizeObserver?.disconnect())

  return <div class={props.class} data-testid="crypto-chart" ref={chartContainerRef!} />
}
