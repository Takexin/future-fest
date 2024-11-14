import './Welcome.css'
import { forwardRef } from 'react';

const Welcome = forwardRef((props, ref) => {
  return(
    <div className="main-background" ref={ref}>
      <h1 id='link1'>TECNOLOGIA. MENTE. <strong>FUTURO.</strong></h1>
      <p>A IA que revolucionará a saúde mental no trabalho.</p>
    </div>
  )
})

export default Welcome