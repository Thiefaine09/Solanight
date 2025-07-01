const PianoPreview = ({ title, url, thumbnail }) => (
  <div className="bg-black rounded-2xl p-5 border border-gray-800 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)] hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:scale-[1.025] transition-all duration-300 ease-in-out">
    <img
      src={thumbnail}
      alt={title}
      className="rounded-md w-full h-48 object-cover mb-4"
    />
    <h3 className="text-white text-lg font-semibold mb-3 text-center drop-shadow-md">{title}</h3>
    <div className="text-center">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-semibold shadow-md"
      >
        Voir sur TikTok
      </a>
    </div>
  </div>
);

export default PianoPreview;
