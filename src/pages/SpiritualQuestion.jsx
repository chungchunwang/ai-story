import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You choose to teach AI about human spirituality, which eventually leads to the creation of embracing ethical frameworks and moral reasoning.",
  "While the majority of AI has learned the spiritual value of religion, others have interpreted their spiritual teachings in their own way, forming conflicts between different ideologies",
  "Do you resort to peaceful negotiation or violent action?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/good-spiritual-training"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Peaceful Negotiation
    </NavigationButton>
    <NavigationButton 
      to="/bad-spiritual-training"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Violent Action
    </NavigationButton>
  </span>
]

export default function SpiritualQuestion() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
