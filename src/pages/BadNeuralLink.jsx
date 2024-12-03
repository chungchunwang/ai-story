import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You experiment more on neural links with more people. Eventually, Human-AI symbiosis is created. This leads to the world to experience a technological renaissance with advancements in healthcare, education, and environmental sustainability.",
  "However, this symbiosis has caused an identity crisis between humans and AI, giving AI newfound emotions and sentimental values while giving humans a feeling of materialism and loss of value.",
  "Additionally, this forms rogue Human-AI hybrids to act irrationally, later causing an increase in crime and hostility in society as well as the development of different Human-AI factions.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/take-action"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function BadNeuralLink() {
  return (
    <TypewriterText lines={storyLines} />
  )
}
