import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Your approval ratings plummet as the economy continues to struggle.",
  "Other nations surge ahead in AI capabilities.",
  "The US loses its technological edge in the global market.",
  "Your term ends with the country falling behind in the AI revolution.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Start Over
    </NavigationButton>
  </span>
]

export default function LoseSupport() {
  return (
    <TypewriterText lines={storyLines} />
  )
}