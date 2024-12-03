import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You use diplomatic efforts to make peace with AI. Do you wish to coexist with AI?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/ai-separation"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      No
    </NavigationButton>
    <NavigationButton 
      to="/ai-and-humans"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Yes
    </NavigationButton>
  </span>
]

export default function DiplomaticEfforts() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
