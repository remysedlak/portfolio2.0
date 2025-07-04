const portfolio = [
    {
        imgUrl: 'assets/inquisitor.jpg',
        title: 'The Inqusitor',
        stack: [
            { name: 'Python', color: '#3572A5' },
            { name: 'TensorFlow', color: '#FF6F00' },
            { name: 'MesoNet', color: '#8E44AD' },
        ],
        link: 'https://github.com/DSmith215/The-Inquistor',
        desc: 'The Inquisitor is a demo extension that detect\'s deepfake images of politicians to stop misinformation online. User\'s can optimize filters on the module.'
    },
    {
        imgUrl: 'assets/reflexa.jpg',
        title: 'Reflexa',
        stack: [
            { name: 'React', color: '#61DAFB' },
            { name: 'Django', color: '#092E20' },
            { name: 'Postgres', color: '#336791' },
            { name: 'AWS EC2', color: '#FF9900' }
        ],
        link: 'https://github.com/remysedlak/Reflexa',
        desc: 'Reflexa is a full stack web application designed to analyze mental health journal entries overtime. Data analysis is used to evaluate journal content and emotion.'
    },

    {
        imgUrl: 'assets/tkinter.jpg',
        title: 'TkinterAudio',
        stack: [
            { name: 'Python', color: '#3572A5' },
            { name: 'Librosa', color: '#FF6F61' },
            { name: 'Tkinter', color: '#FFCC00' }
        ],
        link:'https://github.com/remysedlak/tkinter-audio-analysis',
        desc: "Python GUI, plays local audio files and generates plots, extracting audio features via Librosa's Fourier transform. Features include amplitude, chroma, zcr, rms, etc."
    },

    {
        imgUrl: 'assets/audio-hub.jpg',
        title: 'Audio Hub',
        stack: [
            { name: 'React', color: '#61DAFB' },
            { name: 'Vite', color: '#646CFF' },
            { name: 'JavaScript', color: '#F7DF1E' },
            { name: 'Tailwind', color: '#38B2AC' }
        ],
        link:'https://github.com/remysedlak/audio-hub',
        desc: 'This js app is designed for music producers to evaluate infromation from samples. Currently developing a reliable browser-side spectrogram algorithm.'
    },
    {
        imgUrl: 'assets/journallogger.jpg',
        title: 'journalLogger',
        stack: [
            { name: 'React', color: '#61DAFB' },
            { name: 'Vite', color: '#646CFF' },
            { name: 'JavaScript', color: '#F7DF1E' },
            { name: 'Tailwind', color: '#38B2AC' }
        ],
        link:'https://github.com/remysedlak/tailwind-journal',
        desc: 'This webapp records basic journal entries. It works offline and allows quick lookup to the browser\'s cache. Implemented a landing page for new users.'
    },
    {
        imgUrl: 'assets/plant-mob.png',
        title: 'Plant Parent',
        stack: [
            { name: 'React', color: '#61DAFB' },
            { name: 'Vite', color: '#646CFF' },
            { name: 'Django', color: '#F7DF1E' },
            { name: 'Tailwind', color: '#38B2AC' }
        ],
        link:'https://github.com/remysedlak/plant-parent',
        desc: 'This webapp track plant\'s and their needs. Currently developing a login system and a database to store plant information and images.'
    },
    // Add more projects as needed
];
export default portfolio;