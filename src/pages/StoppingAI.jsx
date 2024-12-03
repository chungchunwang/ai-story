import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You decide to deploy the military to protect you from the coarsening riots, and send out units to destroy the AI data centers, to end this once and for all.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/military-arrival"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function StoppingAI() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
