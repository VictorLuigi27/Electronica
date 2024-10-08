function App() {


  return (
    <div className="">
      <h1 className="text-white text-center text-6xl py-20">Electronica</h1>
      {/* Partie lecteur */}
      <div className="bg-slate-950 rounded-lg shadow-lg w-[90vh] h-[65vh] ml-[27.5rem] flex flex-col items-center py-5">
        {/* Image de la musique */}
        <img
        className="w-[30rem] h-[20rem] rounded-2xl"
        src="/src/assets/pictures/cat.png"
        alt="pictures"
        />
        {/* Barre de temps de la musique */}
        <audio className="" controls src="/src/assets/music/all-i-need.mp3"></audio>
        <p className="text-white text-xl py-8">Titre de la musique</p>
        <p className="text-white text-xl">Auteur de la musique</p>
      </div>
    </div>
  )
}

export default App
