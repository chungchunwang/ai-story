import TypewriterText from '../components/shared/TypewriterText'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "You implement universal basic income and expanded welfare programs.",
  "This helps displaced workers maintain their standard of living.",
  "However, the programs are expensive and require higher taxes.",
  "The economy adapts to the new reality, but tensions remain.",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
      to="/mass-unemployment"
      delay={0.3}
      style={{ marginTop: '2rem' }}
    >
      Continue
    </NavigationButton>
  </span>
]

export default function WelfarePrograms() {
  return (
    <TypewriterText lines={storyLines} />
  )
}