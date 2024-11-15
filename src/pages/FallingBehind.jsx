import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Other countries are advancing rapidly in AI development while your restrictions hold back progress.",
  "Your advisors warn that the US is falling behind in the AI race.",
  "The tech industry is lobbying hard to ease restrictions.",
  "What do you do?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/maintain-restrictions"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Maintain Restrictions
    </NavigationButton>
    <NavigationButton 
      to="/fund-research"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Fund AI Research
    </NavigationButton>
  </span>
]

export default function FallingBehind() {
  return (
    <TypewriterText lines={storyLines} />
  )
}