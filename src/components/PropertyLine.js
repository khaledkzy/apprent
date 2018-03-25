import React from 'react'
import { formatAsCurrency } from '../util'
import { spareRoomCalculator } from '../util'
export default ({ address, bedrooms, price }) => (
    <li>
    {address} - {bedrooms} bedroom property - {formatAsCurrency(price/bedrooms)} per room - {spareRoomCalculator(bedrooms)} spare room <button>Apply</button>

    </li>
)

// class MyDumbClass extends React.Component {
//     render() {
//         const { address, bedrooms, price } = this.props
//         return(
//             <li>
//             {address} - {bedrooms} - £{formatAsCurrency(price)} per room

//             </li>
//         )
//     }
// }

// export default MyDumbClass
