import useSound from 'use-sound'
import { Button } from '@nextui-org/react'

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
      name: 'Palmas',
      local: '/sounds/palmas.mp3',
      category: 'meme'
    }
  ]

  return (
    <>
      {sounds.map((sound, i) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [play] = useSound(sound.local)
        return (
          <Button onClick={() => play()} key={i}>
            {sound.name}
          </Button>
        )
      })}
    </>
  )
}
