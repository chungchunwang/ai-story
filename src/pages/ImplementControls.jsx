import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You implement strict controls on AI development.",
  "Companies must now follow rigorous testing and safety protocols.",
  "Development slows, but AI systems become more reliable and trustworthy.",
  "However, other nations continue unrestricted development.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/falling-behind"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function ImplementControls() {
  return (
    <TypewriterText lines={storyLines} />
  )
} 