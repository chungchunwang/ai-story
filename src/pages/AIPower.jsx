import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "After long consideration, you chose your species over your pride. You give AI full power over society and you pray you made the right decision.",
  "AI becomes a supreme leader of society and soon humans lose their role as the rulers of earth. In a century humans have become the pets of the superior AI.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Your Game
    </NavigationButton>
  </span>
]

export default function AIPower() {
  return (
    <TypewriterText lines={storyLines} />
  )
}

