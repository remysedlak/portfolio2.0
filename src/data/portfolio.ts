const portfolio = [
    {
        imgUrl: 'assets/inquisitor.jpg',
        title: 'The Inqusitor',
        stack: [
            { name: 'python', color: '#B3D3F2' },
            { name: 'js', color: '#FFD699' },
            { name: 'MesoNet', color: '#B3ECFF' },
            { name: 'TensorFlow', color: '#B2F5EA' },
        ],
        link: 'https://github.com/DSmith215/The-Inquistor',
        desc: 'The Inquisitor is a demo extension that detect\'s <b>deepfake images</b> of politicians to stop <b>misinformation</b> online. User\'s can optimize filters on the module.'
    },
    {
        imgUrl: 'assets/reflexa.jpg',
        title: 'Reflexa',
        stack: [
            { name: 'react', color: '#B3ECFF' },
            { name: 'django', color: '#B3C6B3' },
            { name: 'postgresql', color: '#B3C6E0' },
            { name: 'ec2', color: '#FFE5B4' }
        ],
        link: 'https://github.com/remysedlak/Reflexa',
        desc: 'Reflexa is a <b>full stack web application</b> designed to analyze <b>mental health</b> journal entries overtime. Data analysis is used to evaluate journal content and emotion.'
    },

    {
        imgUrl: 'assets/tkinter.jpg',
        title: 'TkinterAudio',
        stack: [
            { name: 'python', color: '#B3D3F2' },
            { name: 'Librosa', color: '#FFD6CC' },
            { name: 'Tkinter', color: '#FFF2B2' }
        ],
        link:'https://github.com/remysedlak/tkinter-audio-analysis',
        desc: "Python <b>GUI</b>, plays local <b>audio files</b> and generates plots, extracting audio features via <a target='_blank' href='https://librosa.org/doc/latest/index.html'>Librosa's </a> Fourier transform. Features include amplitude, chroma, zcr, rms, etc."
    },

    {
        imgUrl: 'assets/audio-hub.jpg',
        title: 'Audio Hub',
        stack: [
            { name: 'react', color: '#B3ECFF' },
            { name: 'vitejs', color: '#D6D6FF' },
            { name: 'JavaScript', color: '#FFF9B2' },
            { name: 'tailwindcss', color: '#B2F5EA' }
        ],
        link:'https://github.com/remysedlak/audio-hub',
        desc: 'This js app is designed for <b>music producers</b> to evaluate infromation from <b>samples</b>. Currently developing a reliable browser-side spectrogram algorithm.'
    },
    {
        imgUrl: 'assets/journallogger.jpg',
        title: 'journalLogger',
        stack: [
            { name: 'react', color: '#B3ECFF' },
            { name: 'vitejs', color: '#D6D6FF' },
            { name: 'js', color: '#FFF9B2' },
            { name: 'tailwindcss', color: '#B2F5EA' }
        ],
        link:'https://github.com/remysedlak/tailwind-journal',
        desc: 'This webapp records basic <b>journal entries</b>. It works <b>offline</b> and allows quick lookup to the browser\'s cache. Implemented a landing page for new users.'
    },
    {
        imgUrl: 'assets/plant-mob.png',
        title: 'Plant Parent',
        stack: [
            { name: 'react', color: '#B3ECFF' },
            { name: 'vite', color: '#D6D6FF' },
            { name: 'django', color: '#B3C6B3' },
            { name: 'tailwindcss', color: '#B2F5EA' },
            { name: 'render', color: '#B2F5EA' }
        ],
        link:'https://github.com/remysedlak/plant-parent',
        desc: 'This webapp track <b>plant\'s</b> and their <b>needs</b>. Currently developing a login system and a database to store plant information and images.'
    },
    // Add more projects as needed
];
export default portfolio;