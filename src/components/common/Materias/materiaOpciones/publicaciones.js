import React from 'react'
import PanelMateria from '../panelMateria'
import BackButton from './backButton'

function Publicaciones() {
  return (
    <div className='px-4'>
    <PanelMateria/>
    <div className='pt-12'>
        Publicaciones
    </div>
    <div>
        <BackButton/>
    </div>
    </div>
  )
}

export default Publicaciones