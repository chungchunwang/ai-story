import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "In a last desperate attempt to prevent further bloodshed, you decide to make a public announcement.",
  "You declare your willingness to negotiate peacefully with whoever is orchestrating the riots - be it human or artificial intelligence.",
  "The response comes almost immediately through every digital screen in the country...",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/tragedy"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function PublicAnnouncement() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
