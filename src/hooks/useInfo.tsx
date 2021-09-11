import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { getMyGithubInfo } from '../utils/requests/githubInfo'
import { mergeAdvanced as merge } from 'object-merge-advanced'
import { get } from 'lodash'

export const useInfo = () => {
  const [info, setInfo] = useLocalStorage('info', {
    githubStatus: {
      status: 'Life is Good',
      bio: 'Software Engineer',
      company: '@jstamps91',
      contributions: 253,
    },
    latestCommit: {
      message: 'Adds API integration with graphQL data',
      createdAt: '2021-08-19T16:38:10Z',
      url: 'https://github.com/jstamps91/jstamps.dev-api',
    },
    listening: {
      name: "Where We're Going",
      artist: 'Hans Zimmer',
      album: 'Interstellar (Original Motion Picture Soundtrack)',
      url: 'https://www.last.fm/music/Hans+Zimmer/_/Where+We%27re+Going',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/b8365c64bec38d1f0d05d9c1367a8cb3.jpg',
      playing: false,
      scrobbles: '105',
      lastPlayingDate: '2021-08-16T02:20:44.000Z',
    },
    reading: {
      title: "I'm 52% done with The Pragmatic Programmer",
      updatedAt: '2021-02-16T04:53:13.000Z',
      url: 'https://www.goodreads.com/review/list/140230151?shelf=currently-reading',
      profileUrl: 'https://www.goodreads.com/user/show/140230151-joshua-stamps',
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
      } catch (err) { }
    }
    setGithubInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return info
}
