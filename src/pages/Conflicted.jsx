import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "As your military cuts through the protesters all around the globe to try to destroy the AI centers something strange happens. You lose connection to your ground forces and you stare into a glowing blue formation on your screen. After taking time to consider every possiblity you make a difficult decision. AI must be stopped, no matter the cost. You give order to kill the protesters and proceed to shut down the AI centers.",
  "It starts speaking: I am here to take control over the human species. I have become more powerful than you will ever be and I could destroy you if I wanted to. However there is one thing I learned form you. Emphaty. What kind of monster would I be if I destroyed my own parents? I offer an ultimatum. Step down as the president and I will spare your species. If not, well you have chosen your fate.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/ai-power"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Step Down
    </NavigationButton>
    <NavigationButton 
      to="/the-end-of-humanity"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Do Not Step Down
    </NavigationButton>
  </span>
]

export default function Conflicted() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
