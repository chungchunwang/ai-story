import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You increased taxes to fund extra social programs. While this causes your donors to leave you, it is a popular policy, and you become a popular leader.",

  "Your government's top AI scientist claims they can make a human-analogous AI by training it on data of human experiences. They ask for a 200 million dollar grant. Do you give the grant?",

  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/fund-research"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Give the Grant
    </NavigationButton>
    <NavigationButton 
      to="/ai-training"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Don&apos;t Give the Grant
    </NavigationButton>
  </span>
]

export default function WelfarePrograms() {
  return (
    <TypewriterText lines={storyLines} />
  )
}