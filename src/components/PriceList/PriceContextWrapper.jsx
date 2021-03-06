import React from 'react'
import PriceList from './PriceList'
import {PriceProvider} from './PriceContext'

export default function PriceContextWrapper() {
    return (
      <PriceProvider>
        <div>
          <PriceList />
        </div>
      </PriceProvider>
    );
}
