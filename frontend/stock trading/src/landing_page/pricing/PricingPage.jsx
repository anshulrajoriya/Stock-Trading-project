import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import Slidetable from './Slidetable'
import AccountCharges from './AccountChanges'
import  DematAMC from './Brokerage'
function PricingPage() {
    return (
        <div>
            <Hero/>
            <Brokerage/>
            <Slidetable/>
            <AccountCharges/>
            <DematAMC/>
        </div>
    )
}

export default PricingPage
