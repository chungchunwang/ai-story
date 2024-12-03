import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Do you take political and diplomatic action to address the identity crisis or ignore the issue?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/fixing-neural-link"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Take Action
    </NavigationButton>
    <NavigationButton 
      to="/neural-link-chaos"
      delay={0.3} 
      style={{ marginTop: '2rem' }}
    >
      Ignore the Issue
    </NavigationButton>
  </span>
]

export default function TakeAction() {
  return (
    <TypewriterText lines={storyLines} />
  )
}

