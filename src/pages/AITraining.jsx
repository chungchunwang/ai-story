import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "AI is not trained in Human experiences and, therefore, has to learn on its own, which disadvantages it compared to humans.",
  "Do you wish to promote AI by combining it with humans or end its development?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/combine-ai"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Combine with Humans
    </NavigationButton>
    <NavigationButton 
      to="/ai-banned"
      delay={0.3} 
      style={{ marginTop: '2rem' }}
    >
      End Development
    </NavigationButton>
  </span>
]

export default function AITraining() {
  return (
    <TypewriterText lines={storyLines} />
  )
}