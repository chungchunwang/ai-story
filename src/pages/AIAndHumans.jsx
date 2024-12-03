import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "AI and humans combine and become cyborg-like creatures. The fusion of humans and androids ushers in a new era of humanity.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="https://store.steampowered.com/app/1222140/Detroit_Become_Human/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Your Game
    </NavigationButton>
  </span>
]

export default function AIAndHumans() {
  return (
    <TypewriterText lines={storyLines} />
  )
}

