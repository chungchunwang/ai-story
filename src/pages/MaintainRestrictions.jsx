import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You maintain the restrictions on AI development.",
  "The tech industry moves operations to other countries.",
  "The US economy begins to struggle as innovation slows.",
  "Public opinion turns against your policies.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/lose-support"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function MaintainRestrictions() {
  return (
    <TypewriterText lines={storyLines} />
  )
}