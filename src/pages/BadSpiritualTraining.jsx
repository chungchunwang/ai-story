import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "In response to violent action, this leads to marginalization and sectarianism between humans, AI, and different groups of AI. This eventually leads to a holy war.",
  "Due to AI's technological superiority, the human race is whipped out. After the extinction of the human race, different AI populations with different spiritual ideologies govern over the world.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
      external={true}
    >
      The End. Restart?
    </NavigationButton>
  </span>
]

export default function BadSpiritualTraining() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
