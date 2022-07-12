# SolidJS Crypto Chart

![main workflow](https://github.com/HusariaSolutions/solid-crypto-chart/actions/workflows/main.yml/badge.svg)

Chart library based on **lighweight-charts** with data fetching from Binance (through REST and WebSocket).

## Example

```
cd example
npm install
npm start
```

## How To Install

### NPM

```npm
npm i @husaria-solutions/solid-crypto-chart
```

### Yarn

```npm
yarn add @husaria-solutions/solid-crypto-chart
```

## Usage

```typescript
import { CryptoChart } from '@husaria-solutions/solid-crypto-chart'

function Chart() {
  return <CryptoChart pair="BTCBUSDT" />
}
```

## Properties

<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Prop</th>
    <th class="tg-0pky">Required</th>
    <th class="tg-0pky">Type</th>
    <th class="tg-0pky">Default Value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">pair</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">String</td>
    <td class="tg-0pky">BTCBUSDT<br>Please refer binance api for more pairs<br><a href="https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md">binance rest api</a></td>
  </tr>
  <tr>
    <td class="tg-0pky">interval</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">String enum (Binance values, like 1m, 15m, 1H, 1D)</td>
    <td class="tg-0pky">1m</td>
  </tr>
  <tr>
    <td class="tg-0pky">candleStickConfig</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Object</td>
    <td class="tg-0pky">
    <pre> 
    {
        upColor: "#00c176",
        downColor: "#cf304a",
        borderDownColor: "#cf304a",
        borderUpColor: "#00c176",
        wickDownColor: "#838ca1",
        wickUpColor: "#838ca1",
    }
    </pre>
    </td>
  </tr>
  <tr>
    <td class="tg-0pky">histogramConfig</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Object</td>
    <td class="tg-0pky">
    <pre>{
        base: 0,
        lineWidth: 2,
        priceFormat: {
            type: "volume",
        },
        overlay: true,
        scaleMargins: {
            top: 0.8,
            bottom: 0,
        },
    }
  </pre>
    </td>
  </tr>
  <tr>
    <td class="tg-0pky">chartLayout</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Object</td>
    <td class="tg-0pky">
    <pre>
    {
        layout: {
            backgroundColor: "#ededed",
            textColor: "#253248",
        },
        grid: {
            vertLines: {
            color: "#838fa3",
            style: LineStyle.SparseDotted,
            },
            horzLines: {
            color: "#838fa3",
            style: LineStyle.SparseDotted,
            },
        },
        crosshair: {
            mode: CrosshairMode.Normal,
        },
        priceScale: {
            borderColor: "#485c7b",
        },
        timeScale: {
            borderColor: "#485c7b",
            timeVisible: true,
            secondsVisible: false,
        },
    }
    </pre>
    </td>
  </tr>
  <tr>
    <td class="tg-0pky">containerStyle</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Object</td>
    <td class="tg-0pky">
    <pre>
    {
      maxWidth: '100%',
      maxHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  </pre></td>
  </tr>
</tbody>
</table>

## Author

<img alt="Husaria Solutions banner" src="https://husariasolutions.com/img/husaria-logo-with-name-small.jpg" />

[https://husariasolutions.com](https://husariasolutions.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
