import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "An AI chip is created with the purpose of achieving neural linkage between humans and AI.",
  "Do you wish to expand this project to increase human advancement or wish to stop the technological movement and ban AI?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/bad-neural-link"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Expand Project
    </NavigationButton>
    <NavigationButton 
      to="/ai-banned"
      delay={0.3} 
      style={{ marginTop: '2rem' }}
    >
      Ban AI
    </NavigationButton>
  </span>
]

export default function NeuralLink() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
