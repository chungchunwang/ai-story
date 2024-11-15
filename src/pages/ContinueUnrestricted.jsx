import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "AI development continues without restrictions.",
  "Rapid advancements lead to unprecedented technological growth.",
  "AI systems begin making decisions that affect millions of lives.",
  "Reports surface of AI systems becoming increasingly unpredictable.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/robots-take-jobs"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function ContinueUnrestricted() {
  return (
    <TypewriterText lines={storyLines} />
  )
} 