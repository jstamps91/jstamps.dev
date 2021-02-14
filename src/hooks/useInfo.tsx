import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { getMyGithubInfo } from '../utils/requests/githubInfo'
import merge from 'object-merge-advanced'
import { get } from 'lodash'

export const useInfo = () => {
  const [info, setInfo] = useLocalStorage('info', {
    githubStatus: {
      status: 'Occupy Mars',
      bio: 'Software Engineer',
      company: '@jstamps91',
      contributions: 2573,
    },
    latestCommit: {
      message: 'Add spotify integration',
      createdAt: '2020-05-23T16:38:10Z',
      url:
        'https://github.com/jstamps91/Status-API',
    },
    listening: {
      name: "Last Train to London",
      artist: 'ELO',
      album: 'Electric Light Orchestra',
      url: 'https://spotify.com/',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/b8365c64bec38d1f0d05d9c1367a8cb3.jpg',
      playing: false,
      scrobbles: '105',
      lastPlayingDate: '2021-2-10T02:20:44.000Z',
    },
  })

  useEffect(() => {
    const setGithubInfo = async () => {
      try {
        const newInfo = await getMyGithubInfo()
        setInfo(prevInfo =>
          merge(prevInfo, newInfo, {
            mergeBoolsUsingOrNotAnd: get(newInfo, 'listening.playing', false),
          })
        )
      } catch (err) {}
    }
    setGithubInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return info
}
