import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "As the economy slows, the people and your wealthy backers begin to get frustrated.",
  "Do you deregulate AI?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/unrestricted-ai"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Deregulate AI
    </NavigationButton>
    <NavigationButton 
      to="/lose-support"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Keep Restrictions
    </NavigationButton>
  </span>
]

export default function MaintainRestrictions() {
  return (
    <TypewriterText lines={storyLines} />
  )
}