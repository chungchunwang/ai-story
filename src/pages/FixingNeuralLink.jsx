import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You use diplomatic efforts to make peace with the human-AI population and learn to establish peace and equality wether you are human, AI, or both.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/ai-and-humans"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function FixingNeuralLink() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
