import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Despite the differences in spiritual ideologies, you have made peace with AI and have decided to take their ideas and values to other parts of the world.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      The End. Restart?
    </NavigationButton>
  </span>
]

export default function GoodSpiritualTraining() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
