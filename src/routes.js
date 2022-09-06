import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const LangaarKhana = React.lazy(() => import('./views/langaarkhana/Langaarkhana'))
const Ambulance = React.lazy(() => import('./views/ambulance/Ambulance'))
const ContactUs = React.lazy(() => import('./views/contactus/Contactus'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/langaar-khana', name: 'Langar Khaana', element: LangaarKhana },
  { path: '/ambulance', name: 'Ambulance', element: Ambulance },
  { path: '/contact-us', name: 'Contact Us', element: ContactUs },
]

export default routes
