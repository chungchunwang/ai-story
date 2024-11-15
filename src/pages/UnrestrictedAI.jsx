import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "AI development proceeds at an unprecedented pace.",
  "Breakthroughs in machine learning lead to more efficient and capable AI systems.",
  "However, reports emerge of AI systems making autonomous decisions beyond their intended scope.",
  "What action do you take?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/implement-controls"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Implement Controls
    </NavigationButton>
    <NavigationButton 
      to="/continue-unrestricted"
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