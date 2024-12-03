import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Choose how you will give AI human experiences: Neural Linking with Humans or Religious and Spiritual Education.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/neural-link"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Neural Linking
    </NavigationButton>
    <NavigationButton 
      to="/spiritual-question"
      delay={0.3} 
      style={{ marginTop: '2rem' }}
    >
      Religious and Spiritual Education
    </NavigationButton>
  </span>
]

export default function CombineAI() {
  return (
    <TypewriterText lines={storyLines} />
  )
}