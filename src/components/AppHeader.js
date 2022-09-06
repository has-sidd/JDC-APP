import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CHeader, CHeaderNav, CHeaderToggler, CNavLink, CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import { TextField } from '@mui/material'

import './AppHeader.css'
import Date from './header/Date'
import LogoutBtn from './header/LogoutBtn'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="my-4" style={{ border: 'none' }}>
      <CContainer fluid className="maindiv">
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        {/* <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img src={logo} alt="Logo" height={100} className="d-inline-block align-top" />
        </CHeaderBrand> */}
        <CHeaderNav className="d-flex nav navItems">
          <CNavItem className="search">
            <CNavLink className="title" to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem className="search">
            <Date />
          </CNavItem>
          <CNavItem className="search textbox">
            <TextField
              className="textField"
              // style={{width: '30vw'}}
              id="outlined-basic"
              size="small"
              fullWidth
              variant="outlined"
              label="Search"
            />
          </CNavItem>
        </CHeaderNav>
        {/* <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav> */}
        <CHeaderNav className="ms-3 logout">
          {/* <AppHeaderDropdown /> */}
          <LogoutBtn />
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
