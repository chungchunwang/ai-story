import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Violence and chaos continue to spread due to the loss of identity between being human or AI. Eventually, the government has been overthrown by the different factions and only lies an apocalyptic society.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="https://store.steampowered.com/app/1222140/Detroit_Become_Human/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
      external={true}
    >
      Your Game
    </NavigationButton>
  </span>
]

export default function NeuralLinkChaos() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
