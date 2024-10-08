import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import musicData from '/src/assets/data/music.json';
import MusicModal from '/src/components/modal';

function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentMusic = musicData[currentTrackIndex];
  const [openModal, setOpenModal] = useState(false); 

  const handleNextTrack = () => {
    // Pour passer à la piste suivante ou retourner à la première
    setCurrentTrackIndex((prevIndex) => 
      prevIndex === musicData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousTrack = () => {
    // Pour changer de musique +1 pour la prochiane et -1 pour celle d'avant
    setCurrentTrackIndex((prevIndex) => 
      prevIndex === 0 ? musicData.length - 1 : prevIndex - 1
    );
  };

  const handleclick = () => {
    setOpenModal(true)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-950">
      <h1 className="text-white text-center text-6xl py-16">Electronica</h1>

      {/* Partie lecteur */}
      <div className="bg-slate-950 rounded-lg shadow-lg w-[90vh] max-w-[700px] h-[50vh] flex flex-col items-center py-5">

        {/* informations */}
        <img
        className='w-12 h-10 absolute top-5 right-5 cursor-pointer'
        src='/src/assets/icons/infos.svg'
        alt='modal'
        onClick={handleclick}
        />

        {/* Image de la musique */}
        <img
          className="w-64 h-40 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          src={currentMusic.picture} 
          alt="Image de la musique"
        />

        {/* Barre de temps de la musique */}
        <AudioPlayer
          autoPlay
          src={currentMusic.source} 
          className='bg-white rounded-lg w-[80%] h-[5rem] my-5'
          onPlay={() => console.log("Playing")} 
        />

        <div className='flex flex-col items-center gap-4'>
          <p className="text-white text-xl font-semibold">{currentMusic.title}</p>
          <p className="text-gray-400 text-lg">{currentMusic.artist}</p>
        </div>

        {/* Boutons pour changer de musique */}
        <div className="flex gap-4 mt-4">
          <button 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            onClick={handlePreviousTrack}
          >
            Précédent
          </button>
          <button 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            onClick={handleNextTrack}
          >
            Suivant
          </button>
        </div>
      </div>

      <MusicModal 
      openModal={openModal} 
      setOpenModal={setOpenModal} 
      />
      
    </div>
  );
}

export default App;