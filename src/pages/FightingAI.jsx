import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "AI fights back physically and cybernetically. Do you continue this fight?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/ai-takeover"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Yes
    </NavigationButton>
    <NavigationButton 
      to="/diplomatic-efforts"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      No
    </NavigationButton>
  </span>
]

export default function FightingAI() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
