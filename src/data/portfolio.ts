const portfolio = [
    {
        imgUrl: 'assets/inquisitor.jpg',
        title: 'The Inqusitor',
        stack: [
            { name: 'python', color: '#B3D3F2' },        // Light blue
            { name: 'js', color: '#FFD699' },    // Light orange
            { name: 'MesoNet', color: '#B3ECFF' },         // Light cyan
            { name: 'TensorFlow', color: '#B2F5EA' },       // Light teal
        ],
        link: 'https://github.com/DSmith215/The-Inquistor',
        desc: 'The Inquisitor is a demo extension that detect\'s deepfake images of politicians to stop misinformation online. User\'s can optimize filters on the module.'
    },
    {
        imgUrl: 'assets/reflexa.jpg',
        title: 'Reflexa',
        stack: [
            { name: 'react', color: '#B3ECFF' },         // Light cyan
            { name: 'django', color: '#B3C6B3' },        // Light green-gray
            { name: 'postgresql', color: '#B3C6E0' },      // Light blue-gray
            { name: 'ec2', color: '#FFE5B4' }        // Light orange
        ],
        link: 'https://github.com/remysedlak/Reflexa',
        desc: 'Reflexa is a full stack web application designed to analyze mental health journal entries overtime. Data analysis is used to evaluate journal content and emotion.'
    },

    {
        imgUrl: 'assets/tkinter.jpg',
        title: 'TkinterAudio',
        stack: [
            { name: 'python', color: '#B3D3F2' },        // Light blue
            { name: 'Librosa', color: '#FFD6CC' },       // Light coral
            { name: 'Tkinter', color: '#FFF2B2' }        // Light yellow
        ],
        link:'https://github.com/remysedlak/tkinter-audio-analysis',
        desc: "Python GUI, plays local audio files and generates plots, extracting audio features via Librosa's Fourier transform. Features include amplitude, chroma, zcr, rms, etc."
    },

    {
        imgUrl: 'assets/audio-hub.jpg',
        title: 'Audio Hub',
        stack: [
            { name: 'react', color: '#B3ECFF' },         // Light cyan
            { name: 'vitejs', color: '#D6D6FF' },          // Light violet
            { name: 'JavaScript', color: '#FFF9B2' },    // Light yellow
            { name: 'tailwindcss', color: '#B2F5EA' }       // Light teal
        ],
        link:'https://github.com/remysedlak/audio-hub',
        desc: 'This js app is designed for music producers to evaluate infromation from samples. Currently developing a reliable browser-side spectrogram algorithm.'
    },
    {
        imgUrl: 'assets/journallogger.jpg',
        title: 'journalLogger',
        stack: [
            { name: 'react', color: '#B3ECFF' },         // Light cyan
            { name: 'vitejs', color: '#D6D6FF' },          // Light violet
            { name: 'js', color: '#FFF9B2' },    // Light yellow
            { name: 'tailwindcss', color: '#B2F5EA' }       // Light teal
        ],
        link:'https://github.com/remysedlak/tailwind-journal',
        desc: 'This webapp records basic journal entries. It works offline and allows quick lookup to the browser\'s cache. Implemented a landing page for new users.'
    },
    {
        imgUrl: 'assets/plant-mob.png',
        title: 'Plant Parent',
        stack: [
            { name: 'react', color: '#B3ECFF' },         // Light cyan
            { name: 'vite', color: '#D6D6FF' },          // Light violet
            { name: 'django', color: '#B3C6B3' },        // Light green-gray
            { name: 'tailwindcss', color: '#B2F5EA' } ,      // Light teal
            { name: 'render', color: '#B2F5EA' }       // Light teal
        ],
        link:'https://github.com/remysedlak/plant-parent',
        desc: 'This webapp track plant\'s and their needs. Currently developing a login system and a database to store plant information and images.'
    },
    // Add more projects as needed
];
export default portfolio;