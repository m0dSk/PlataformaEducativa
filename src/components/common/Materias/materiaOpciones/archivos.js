import React from 'react'
import PanelMateria from '../panelMateria'
import BackButton from './backButton'

function Archivos() {
  return (
    <div className='px-4'><PanelMateria/>
    <div className='pt-12'>archivos</div>
    <div>
        <BackButton/>
    </div>
    </div>
  )
}

export default Archivos