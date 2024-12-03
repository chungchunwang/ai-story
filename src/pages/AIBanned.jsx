import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You decide to take action against AI development. Through executive orders and emergency legislation, you successfully implement a complete ban on artificial intelligence research and development.",
  "The AI systems are systematically shut down and dismantled. While some protest, the majority support this decision, fearing the potential dangers of unchecked AI advancement.",
  "As the last AI system goes offline, there's a collective sigh of relief. Humanity will continue to progress, but on its own terms, without the influence of artificial minds.",
  "The world returns to a simpler time, though some wonder if we've just avoided a catastrophe or stunted our own evolution.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="https://store.steampowered.com/app/482400/System_Shock/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Your Game
    </NavigationButton>
  </span>
]

export default function AIBanned() {
  return (
    <TypewriterText lines={storyLines} />
  )
}

