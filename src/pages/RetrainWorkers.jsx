import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You launch a massive worker retraining program.",
  "People learn to work alongside AI systems.",
  "Some adapt well, but others struggle with the transition.",
  "Social unrest grows as the divide between tech-savvy and traditional workers widens.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/no-welfare"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function RetrainWorkers() {
  return (
    <TypewriterText lines={storyLines} />
  )
} 