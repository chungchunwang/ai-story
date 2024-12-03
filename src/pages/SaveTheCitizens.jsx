import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You order your troops to stand down, you will not kill your own citizens no matter what.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/public-announcement"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function SaveTheCitizens() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
