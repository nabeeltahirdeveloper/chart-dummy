import { useState } from 'react'
import {
  TradingProvider,
  Chart,
  TradingToolbar,
  CoinSelector,
  VolumeControl,
  StopLoss,
  TakeProfit,
  DrawingTools,
} from '@nabeeltahirdeveloper/chart-sdk'
import './App.css'

function ToolbarDemo() {
  return (
    <TradingProvider baseUrl="https://api-chart-sdk.e-volvo.io">
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <TradingToolbar />
        <Chart />
      </div>
    </TradingProvider>
  )
}

function IndividualDemo() {
  const [volume, setVolume] = useState(0.1)
  const [sl, setSl] = useState('')
  const [slEnabled, setSlEnabled] = useState(false)
  const [tp, setTp] = useState('')
  const [tpEnabled, setTpEnabled] = useState(false)

  return (
    <TradingProvider baseUrl="https://api-chart-sdk.e-volvo.io">
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '6px 12px',
          backgroundColor: '#0f172a',
          borderBottom: '1px solid #1e293b',
          flexWrap: 'wrap',
        }}>
          <CoinSelector />
          <div style={{ width: '1px', height: '24px', backgroundColor: '#1e293b' }} />
          <VolumeControl value={volume} onChange={setVolume} />
          <div style={{ width: '1px', height: '24px', backgroundColor: '#1e293b' }} />
          <StopLoss value={sl} onChange={setSl} enabled={slEnabled} onEnabledChange={setSlEnabled} />
          <div style={{ width: '1px', height: '24px', backgroundColor: '#1e293b' }} />
          <TakeProfit value={tp} onChange={setTp} enabled={tpEnabled} onEnabledChange={setTpEnabled} />
          <div style={{ width: '1px', height: '24px', backgroundColor: '#1e293b' }} />
          <DrawingTools />
        </div>
        <Chart />
      </div>
    </TradingProvider>
  )
}

function App() {
  const [mode, setMode] = useState('toolbar')

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        backgroundColor: '#020617',
        borderBottom: '1px solid #1e293b',
      }}>
        <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 600 }}>Demo Mode:</span>
        <button
          onClick={() => setMode('toolbar')}
          style={{
            padding: '4px 12px',
            backgroundColor: mode === 'toolbar' ? '#1e3a5f' : '#1e293b',
            border: `1px solid ${mode === 'toolbar' ? '#3b82f6' : '#334155'}`,
            borderRadius: '4px',
            color: mode === 'toolbar' ? '#60a5fa' : '#94a3b8',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          Unified Toolbar
        </button>
        <button
          onClick={() => setMode('individual')}
          style={{
            padding: '4px 12px',
            backgroundColor: mode === 'individual' ? '#1e3a5f' : '#1e293b',
            border: `1px solid ${mode === 'individual' ? '#3b82f6' : '#334155'}`,
            borderRadius: '4px',
            color: mode === 'individual' ? '#60a5fa' : '#94a3b8',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          Individual Components
        </button>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        {mode === 'toolbar' ? <ToolbarDemo /> : <IndividualDemo />}
      </div>
    </div>
  )
}

export default App
