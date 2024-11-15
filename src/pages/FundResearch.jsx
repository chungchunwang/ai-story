import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You allocate significant funding to AI research while maintaining safety protocols.",
  "Progress is slower than unrestricted development, but safer.",
  "However, automation begins replacing jobs faster than expected.",
  "How do you address the growing unemployment?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/welfare-programs"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Implement Welfare
    </NavigationButton>
    <NavigationButton 
      to="/retrain-workers"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Retrain Workers
    </NavigationButton>
  </span>
]

export default function FundResearch() {
  return (
    <TypewriterText lines={storyLines} />
  )
}