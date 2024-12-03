import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You are lobbied by wealthy business owners, and will not keep your role unless you don't impose the tax.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/mass-unemployment"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Impose the Tax
    </NavigationButton>
  </span>
]

export default function Lobbied() {
  return (
    <TypewriterText lines={storyLines} />
  )
}