import React, { Component } from 'react'
import Jumbo from '../../components/Jumbo'
import WhatWeDo from '../../components/WhatWeDo'
import Jumbo2 from '../../components/Jumbo2'
import RecentApartments from '../../components/RecentApartments'
import RecentShared from '../../components/RecentShared'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbo />
                <RecentShared />
                <Jumbo2 />
                <RecentApartments />
                <WhatWeDo />
            </div>
        )
    }
}
