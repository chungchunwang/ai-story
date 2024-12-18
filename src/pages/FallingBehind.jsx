import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Other countries continue to develop AI technologies unhindered, and you're economy falls behind as a result.",
  "Do you re-allow unfettered AI development?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/maintain-restrictions"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Maintain Restrictions
    </NavigationButton>
    <NavigationButton 
      to="/unrestricted-ai"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Unrestricted AI Development
    </NavigationButton>
  </span>
]

export default function FallingBehind() {
  return (
    <TypewriterText lines={storyLines} />
  )
}