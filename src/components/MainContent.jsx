import { useState } from 'react'
import Footer from './Footer'
import Introduction from '../sections/Introduction'
import ExamplesByDisability from '../sections/ExamplesByDisability'
import ExamplesByCompliance from '../sections/ExamplesByCompliance'
import ExamplesByPrinciple from '../sections/ExamplesByPrinciple'

export default function MainContent() {
  const [isFooterVisible, setIsFooterVisible] = useState(true)

  return (
    <main className="content-area">
      <Introduction />
      {
        //<ExamplesByDisability />
      }
      {
        //<ExamplesByCompliance />
      }
      {
        //<ExamplesByPrinciple />
      }

      {isFooterVisible && <Footer />}
    </main>
  )
}
