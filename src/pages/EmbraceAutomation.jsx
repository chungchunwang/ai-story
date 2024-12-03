import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Scientists have reported that AI has surpassed the average human in every measurable metric and soon it will be able to replace every human in the workforce.",
  "As this information could mean that AI is more capable than you to lead the country, you suppress these scientists and put them in jail. There must be no one knowing of this.",
  "Despite all your efforts, the progression of AI is barely slowing down, you cannot take a public stance against it because AI has become a core part of people's lives, you cannot take this away from them without losing power.",
  "It was unavoidable but your shady business with suppressing the scientists has been leaked to the public. Protests are already forming and reports say that it might be AI behind it all.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/ai-crashes-economy"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Avoid the Issue
    </NavigationButton>
    <NavigationButton 
      to="/stopping-ai"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Address the Issue
    </NavigationButton>
  </span>
]

export default function EmbraceAutomation() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
