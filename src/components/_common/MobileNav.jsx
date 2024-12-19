import React, { useState } from 'react'
import Modal from './Modal'
import MenuIcon from './MenuIcon'

const MobileNav = () => {
const [isNavShowing, setNavShowing] = useState(false);

  return (
   <Modal show={isNavShowing} toggleShow={() => setNavShowing(prev => !prev)}>
    <Modal.Trigger trigger={MenuIcon} />
    {/* <Modal.Backdrop /> */}
   </Modal>
  )
}

export default MobileNav