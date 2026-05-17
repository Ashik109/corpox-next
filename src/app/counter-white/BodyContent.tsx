import SectionMainCounterUp5Area from './SectionMainCounterUp5Area'
import SectionMainCounterUp1Area from './SectionMainCounterUp1Area'
import SectionMainCounterUp1Area2 from './SectionMainCounterUp1Area2'
import SectionMainCounterUp1Area3 from './SectionMainCounterUp1Area3'
import OdometerCounter from '../../components/OdometerCounter'

function BodyContent() {
  return (
    <OdometerCounter>
      <SectionMainCounterUp5Area />
      <SectionMainCounterUp1Area />
      <SectionMainCounterUp1Area2 />
      <SectionMainCounterUp1Area3 />
    </OdometerCounter>
  )
}

export default BodyContent
