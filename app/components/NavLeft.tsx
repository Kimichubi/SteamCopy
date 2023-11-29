export default function NavLeft() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justfy-center items-center">
          <img
            className="img-present"
            src="https://store.akamai.steamstatic.com/public/images//gift/steamcards_promo_03.png?v=1"
            alt="Steam Gift Card"
          />
        </div>
        <div className="mt-2">
          <h6 className="text-emerald-300 hover:text-stone-50">
            VALES-PRESENTES-STEAM
          </h6>
          <p>Presenteie com o prazer de jogar!</p>
        </div>
        <div className="flex flex-col justfy-center items-center gap-4 m-4 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="py-1 flex justfy-center items-center">
            <h1>Vistos Recentemente</h1>
          </div>
          <div className="py-1 flex justfy-center items-center">
            <p>Grand Theft Auto V</p>
          </div>
        </div>
      </div>
    </>
  );
}
