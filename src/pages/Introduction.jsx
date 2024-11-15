import { useState } from 'react'
import TypewriterText from '../components/shared/TypewriterText'
import RevealButton from '../components/shared/RevealButton'
import RevealContent from '../components/shared/RevealContent'
import NavigationButton from '../components/shared/NavigationButton'

const storyLines = [
  "Welcome. You have an important role to play in this story.",
  "Humans have developed AI to the point at which it can be used for daily work tasks.",
  "AI has become influential in almost every field of life, making every day easier and more efficient.",
  "Scientists have developed stronger machine learning algorithms and AI seems to perform better in certain tasks than humans.",
  "People are getting concerned about the danger of AI. Do you impose restrictions on AI development in your country?",
  <span style={{ display: 'flex', gap: '1rem', direction: 'row' }} key="navigation">
    <NavigationButton 
        to="/falling-behind"
        delay={0.3}
        style={{ marginTop: '2rem' }}
      >
        Yes
    </NavigationButton>
    <NavigationButton 
      to="/unrestricted-ai"
      delay={0.3}
      style={{ marginTop: '2rem' }}
      >
        No
      </NavigationButton>
  </span>
]

export default function Introduction() {
  const [showIdentity, setShowIdentity] = useState(false)
  const [showStory, setShowStory] = useState(false)

  return (
    <>
      <h1>Introduction</h1>
      <p>Welcome. You have an important role to play in this story.</p>
      {!showIdentity && (
        <RevealButton onClick={() => setShowIdentity(true)}>
          Wait, who am I?
        </RevealButton>
      )}

      {showIdentity && (
        <RevealContent style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #40c4ff 0%, #0288d1 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3rem',
            color: '#fff'
          }}>
            👤
          </div>
          <div>
            <h2 style={{ 
              margin: '0 0 0.5rem 0',
              color: '#40c4ff'
            }}>
              You
            </h2>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Role:</strong> President of the United States of America
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Term:</strong> 2024-2028
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Security Clearance:</strong> Top Secret
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Status:</strong> Active
            </p>
          </div>
        </RevealContent>
      )}

      {showIdentity && !showStory && (
        <RevealButton onClick={() => setShowStory(true)}>
          Begin Story
        </RevealButton>
      )}

      {showStory && (
        <TypewriterText 
          lines={storyLines}
          onComplete={() => {
            // Show the navigation button after the story is complete
          }}
        />
      )}
    </>
  )
}
