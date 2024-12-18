import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Your wealthy backers stop supporting you, get you voted out of office, and your successor now deregulates AI.",
  "You now play as your successor.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/unrestricted-ai"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function LoseSupport() {
  return (
    <TypewriterText lines={storyLines} />
  )
}