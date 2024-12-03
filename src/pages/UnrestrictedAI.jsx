import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You are able to develop AI with no restrictions.",
  "AI begins displacing jobs.",
  "Do you impose a tax on the use of AI to protect workers?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/lobbied"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Implement Controls
    </NavigationButton>
    <NavigationButton 
      to="/mass-unemployment"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue Unrestricted
    </NavigationButton>
  </span>
]

export default function UnrestrictedAI() {
  return (
    <TypewriterText lines={storyLines} />
  )
}