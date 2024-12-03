import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "12 hours after your announcement a homeless man shows up in front of the White House. He does not seem any special, but the rioters appear to accept him as their leader. As the man sits down to the conference table he begins his short monologue: I am here to take control over the human species. I have become more powerful than you will ever be and I could destroy you if I wanted to. However there is one thing I learned from you. Empathy. What kind of monster would I be if I destroyed my own parents? I offer an ultimatum. Step down as the president and I will spare your species. If not, well you have chosen your fate.",
  "After the speech, the man starts coughing. Suddenly he falls to the ground, grasping. He coughs up blood and after a few seconds, he stops moving.",
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
      Do not Listen
    </NavigationButton>
  </span>
]

export default function Tragedy() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
