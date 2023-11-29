export default function ContentCarousel() {
  return (
    <div className="flex flex-col shadow-2xl shadow-slate-900 ">
      {/* Title */}
      <div className="flex shadow-2xl">
        <h1 className="text-2xl font-bold">DESTAQUES E RECOMENDADOS</h1>
      </div>

      {/* Content */}
      <div className="flex justify-center items-center shadow-2xl mt-4">
        {/* Image */}
        <div className="flex">
          <img
            className="w-full h-96 object-cover rounded-lg"
            src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg"
            alt="Modern Warfare 3"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col p-4">
          {/* Game Title */}
          <h1 className="text-2xl font-bold mb-4">Modern Warfare 3</h1>

          {/* Image Gallery */}
          <div className="grid gap-4 grid-rows-2 grid-flow-col ">
            {[
              "https://s2-techtudo.glbimg.com/XbgfntSiWysle_PmluB9BNu5OS0=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/T/u/PwiW7uRGqmM4xJAYXfbQ/ss-79e235adb4ea6888595bd2192d174e358277b6cf.1920x1080.jpg",
              "https://republicadg.com.br/wp-content/uploads/2023/08/MW3.jpg",
              "https://flowgames.gg/wp-content/uploads/2023/10/COD-NEXT-TOUT-1.jpg",
              "https://s2-techtudo.glbimg.com/nC_9HuDbZ2BR0ZWnFAqJWEA3GwU=/0x0:620x347/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/p/t/cMKNsITzq1msOQRq0zSA/2011-11-04-call-of-duty-modern-warfare-3-foto-divulgacao1.jpg",
            ].map((imageUrl, index) => (
              <div key={index}>
                <img
                  className="w-32 h-32 object-cover rounded-sm"
                  src={imageUrl}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Description (add your description content here) */}
          <p className="mt-4 text-gray-600">
            Descrição do jogo ou qualquer outra informação relevante.
          </p>
        </div>
      </div>
    </div>
  );
}
