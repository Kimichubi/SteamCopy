import useNotice from "@/app/hooks/useNotice";

export default function ContentCarousel() {
  //@ts-ignore
  const { notices, deleteNotice } = useNotice();
  return (
    <div className="flex flex-col shadow-2xl shadow-slate-900 ">
      {/* Title */}
      <div className="flex shadow-2xl">
        <h1 className="text-2xl font-bold">DESTAQUES E RECOMENDADOS</h1>
      </div>
      {/* @ts-ignore */}
      {notices.map((notice) => (
        <div
          key={notice.title}
          className="flex justify-center items-center shadow-2xl mt-4"
        >
          {/* Image */}
          <div className="flex">
            <img
              className="w-full h-96 object-cover rounded-lg"
              src={notice.img1}
              alt={notice.title}
            />
          </div>

          {/* Details */}
          <div className="flex flex-col p-4">
            {/* Game Title */}
            <h1 className="text-2xl font-bold mb-4">{notice.title}</h1>

            {/* Image Gallery */}
            <div className="grid gap-4 grid-rows-2 grid-flow-col ">
              {[
                `${notice.img2}`,
                `${notice.img3}`,
                `${notice.img4}`,
                `${notice.img5}`,
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
            <p className="mt-4 text-gray-600">{notice.content}</p>
            <button onClick={() => deleteNotice(notice.title)}>
              Excluir Game
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
