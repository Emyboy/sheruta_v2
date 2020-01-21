import React, { Component } from 'react'
import Jumbo from '../../components/Jumbo'
import ApartmentList from '../../components/ApartmentList'
import WhatWeDo from '../../components/WhatWeDo'
import Jumbo2 from '../../components/Jumbo2'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbo />
                <ApartmentList />
                <WhatWeDo />
                <Jumbo2 />
            </div>
        )
    }
}
