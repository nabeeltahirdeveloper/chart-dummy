import { useState } from 'react'
import {
  TradingProvider,
  Chart,
  CoinSelector,
  VolumeControl,
  StopLoss,
  TakeProfit,
  DrawingTools,
  TimeframeSelector,
  ChartTypeSelector,
  TradePanel,
  PositionsPanel,
} from '@nabeeltahirdeveloper/chart-sdk'
import './App.css'

const Divider = () => (
  <div style={{ width: '1px', height: '24px', backgroundColor: '#1e293b', flexShrink: 0 }} />
)

function TradingPlatform() {
  const [volume, setVolume] = useState(0.1)
  const [sl, setSl] = useState('')
  const [slEnabled, setSlEnabled] = useState(false)
  const [tp, setTp] = useState('')
  const [tpEnabled, setTpEnabled] = useState(false)

  const slValue = slEnabled ? sl : undefined
  const tpValue = tpEnabled ? tp : undefined

  return (
    <TradingProvider baseUrl="https://api-chart-sdk.e-volvo.io">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#0a0e17' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 12px',
          backgroundColor: '#0f172a',
          borderBottom: '1px solid #1e293b',
          flexWrap: 'wrap',
          minHeight: '36px',
        }}>
          <CoinSelector />
          <Divider />
          <TimeframeSelector />
          <Divider />
          <ChartTypeSelector />
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 12px',
          backgroundColor: '#0f172a',
          borderBottom: '1px solid #1e293b',
          flexWrap: 'wrap',
          minHeight: '36px',
        }}>
          <VolumeControl value={volume} onChange={setVolume} />
          <Divider />
          <StopLoss value={sl} onChange={setSl} enabled={slEnabled} onEnabledChange={setSlEnabled} />
          <Divider />
          <TakeProfit value={tp} onChange={setTp} enabled={tpEnabled} onEnabledChange={setTpEnabled} />
          <Divider />
          <TradePanel volume={volume} stopLoss={slValue} takeProfit={tpValue} />
          <Divider />
          <DrawingTools />
        </div>

        <div style={{ flex: 1, minHeight: 0 }}>
          <Chart />
        </div>

        <PositionsPanel maxHeight={180} />
      </div>
    </TradingProvider>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <TradingPlatform />
    </div>
  )
}

export default App
