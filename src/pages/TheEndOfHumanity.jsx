import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You think this was just a bluff. There is no way AI has the power to do all of this. You are escorted to the presidential safety bunker where you see the Red Button. As you press it nuclear weapons launch from their hidden silos with one goal: to destroy all that is connected to AI.",
  "As you watch the flight of the nukes, something strange happens. Their trajectory suddenly changes, and they are now headed to cities.",
  "As you realize what has just happened, one of your most trusted men turns to you and says, \"I told you so.\"",
  "As you watch the world burn in front of your eyes, he puts his gun to your head, and he pulls the trigger, and humanity ceases to exist.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="https://store.steampowered.com/app/1151340/Fallout_76/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Your Game
    </NavigationButton>
  </span>
]

export default function TheEndOfHumanity() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
