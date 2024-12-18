import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "The government creates an AI that is analogous to humans. This is potentially very dangerous. Do you control the use of this technology?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/robots-take-jobs"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Do Not Control AI Use
    </NavigationButton>
    <NavigationButton 
      to="/ai-concerns"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Control AI Use
    </NavigationButton>
  </span>
]

export default function FundResearch() {
  return (
    <TypewriterText lines={storyLines} />
  )
}