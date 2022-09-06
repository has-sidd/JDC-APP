import React from 'react'
import { CRow } from '@coreui/react'
import pic1 from '../../../src/assets/images/langaar.png'
import pic2 from '../../../src/assets/images/ambulance.png'
import Cards from './Cards'

const WidgetsDropdown = () => {
  const item = [
    {
      id: 1,
      image: pic1,
      title: 'Langaar Khana',
    },
    {
      id: 2,
      image: pic2,
      title: 'Ambulance',
    },
  ]
  return (
    <>
      <CRow>
        {item.map((item) => (
          <Cards key={item.id} title={item.title} image={item.image} />
        ))}
      </CRow>
    </>
  )
}

export default WidgetsDropdown
