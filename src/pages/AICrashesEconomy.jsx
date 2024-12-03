import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "As the riots become more and more aggressive, the economy starts to crumble. Despite all your efforts you could not stop the mob and your worst fear seems to come to reality as there appears to be someone coordinating from the shadow. These are not simple protests, this is a coup. Orchestrated by AI.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/stopping-ai"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Destroy AI
    </NavigationButton>
    <NavigationButton 
      to="/public-announcement" 
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Negotiate with Rioters
    </NavigationButton>
  </span>
]

export default function AICrashesEconomy() {
  return (
    <TypewriterText lines={storyLines} />
  )
}

