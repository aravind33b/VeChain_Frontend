function Card() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white my-8 mx-auto p-6">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
      </div>
    );
  }
  
  export default Card;
  