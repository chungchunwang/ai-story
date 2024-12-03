import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "When the military arrives at the AI centers, they are met with an unexpected sight. Thousands of citizens have formed human shields around the facilities.",
  "These people are not violent rioters - they are ordinary citizens who have come to deeply value the prosperity and freedom that AI has brought to their lives. They stand resolute, willing to protect the AI with their very lives.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/save-the-citizens"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Save the Citizens
    </NavigationButton>
    <NavigationButton 
      to="/conflicted"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Do Nothing
    </NavigationButton>
  </span>
]

export default function MilitaryArrival() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
