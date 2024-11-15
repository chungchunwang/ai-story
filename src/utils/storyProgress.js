const STORY_PROGRESS_KEY = 'ai_story_progress'

export const saveProgress = (path) => {
  const progress = getProgress()
  if (!progress.includes(path)) {
    progress.push(path)
    localStorage.setItem(STORY_PROGRESS_KEY, JSON.stringify(progress))
  }
}

export const getProgress = () => {
  const progress = localStorage.getItem(STORY_PROGRESS_KEY)
  return progress ? JSON.parse(progress) : ['/']
}

export const hasUnlocked = (path) => {
  const progress = getProgress()
  return progress.includes(path)
}

export const clearProgress = () => {
  localStorage.setItem(STORY_PROGRESS_KEY, JSON.stringify(['/']))
} 