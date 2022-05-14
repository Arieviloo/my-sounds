import useSound from 'use-sound'

export const Main = () => {
  const sounds = [
    {
      id: 1,
      name: 'Rojão',
      local: '/sounds/rojao.mp3',
      category: 'meme'
    },
    {
      id: 2,
      name: 'Rojão',
      local: '/sounds/rojao.mp3',
      category: 'meme'
    }
  ]
  return (
    <>
      {sounds.map((sound, i) => {
        const [play] = useSound(sound.local)
        return (
          <button onClick={() => play()} key={i}>
            Boop!
          </button>
        )
      })}
    </>
  )
}
