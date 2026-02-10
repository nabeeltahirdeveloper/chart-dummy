import { TradingProvider, Chart } from '@nabeeltahirdeveloper/chart-sdk'
import './App.css'

function App() {
  return (
    <TradingProvider baseUrl="https://api-chart-sdk.e-volvo.io">
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Chart />
      </div>
    </TradingProvider>
  )
}

export default App
