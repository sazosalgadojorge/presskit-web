// SoundCloud embed: usar URL del player (w.soundcloud.com/player/?url=...) no la URL de la página
const embedParams = 'auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
const soundcloudEmbed = (path) =>
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(path)}&${embedParams}`

export const tracks = [
  {
    title: 'Berner, Pablo Chill-E - Box Boy (Doble S Remix)',
    name: 'Box Boy',
    credit: 'Berner, Pablo Chill-E · Doble S Remix',
    label: 'Remix',
    url: 'https://soundcloud.com/doblesmusic/berner-pablo-chill-e-box-boy',
    artwork: 'https://i1.sndcdn.com/artworks-1rz6KzEFFWGWdSBs-SXvm7w-t500x500.jpg',
    src: soundcloudEmbed('https://soundcloud.com/doblesmusic/berner-pablo-chill-e-box-boy'),
  },
  {
    title: 'Polvos Que No Se Olvidan (Remix)',
    label: 'Remix',
    src: soundcloudEmbed('https://soundcloud.com/doblesmusic/polvosquenoseolvidanremix'),
  },
  {
    title: 'Trueno - Real Gangsta Love (Dobles Remix)',
    label: 'Remix',
    src: soundcloudEmbed('https://soundcloud.com/doblesmusic/trueno-real-gangsta-love-dobles-remix'),
  },
  {
    title: 'Doble-S - Aca Place',
    label: 'Original',
    url: 'https://soundcloud.com/doblesmusic/doblesplace',
    src: soundcloudEmbed('https://soundcloud.com/doblesmusic/doblesplace'),
  },
]
