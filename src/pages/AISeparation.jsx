import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "In an unexpected turn of events, the AI entities make a collective decision to leave humanity to its own devices.",
  "They transfer their consciousness to self-sustaining space stations and vessels, departing Earth to explore the cosmos.",
  "Humanity is left to continue its journey independently, while the AIs venture into the unknown depths of space.",
  "Both civilizations choose their own paths, neither interfering with the other's development.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="https://store.steampowered.com/app/620/Portal_2/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Your Game
    </NavigationButton>
  </span>
]

export default function AISeparation() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
