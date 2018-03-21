import React from 'react'
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

const DFP = (props) => {
  return (
    <DFPSlotsProvider dfpNetworkId={'35139216'} adUnit={"Actitudfem"}>
      <AdSlot sizes={[ [900, 90], [props.width, props.height]]} />
    </DFPSlotsProvider>
  )
}

export default DFP
