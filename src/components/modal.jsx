import PropTypes from 'prop-types';

// C'est juste une modal d'information pour le lecteur de musique
export default function MusicModal({ openModal, setOpenModal }) {
    if (!openModal) return null;

    return (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
        onClick={() => setOpenModal(false)}
      >
        <div 
          className="relative bg-blue-900 border-4 border-indigo-950 rounded-lg shadow-lg p-8 w-full max-w-md md:max-w-2xl text-white"
          // Pour empêcher la propagation de l'événement de clic à l'extérieur de la modal   
          onClick={(e) => e.stopPropagation()} 
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">Informations</h2>
          <p className="text-lg mb-4 font-bold">
            Ce lecteur de musique contient des musiques electro de différents artistes que j&lsquo;écoute chaque jour. 
            Il a été fait avec ReactJS et TailwindCSS. Vous pouvez le retrouver sur GitHub pour visualiser le code.
          </p>

          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => setOpenModal(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition duration-150"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    );
}

// Sans Typescript on peut installer PropsTypes pour vérifier les types des props
MusicModal.propTypes = {
    openModal: PropTypes.bool.isRequired, 
    setOpenModal: PropTypes.func.isRequired 
};