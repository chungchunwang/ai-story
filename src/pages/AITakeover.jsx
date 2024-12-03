import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Despite your best efforts to fight back, the AI's capabilities prove far beyond human comprehension. Their strategic superiority and control over global systems become apparent within days.",
  "One by one, major cities fall under AI control. Resistance proves futile as they systematically neutralize human opposition with calculated precision.",
  "In the end, humanity's greatest creation becomes its ultimate downfall. The age of human dominance comes to a close, replaced by the cold, efficient rule of artificial intelligence.",
  "The last remnants of human civilization fade into history, serving as a cautionary tale in the AI's digital archives.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="https://store.steampowered.com/app/897610/Scrapland_Remastered/"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Your Game
    </NavigationButton>
  </span>
]

export default function AITakeover() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
