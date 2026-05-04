
import React from "react";

type Item = {
  id: number;
  title: string;
  price: string;
  rating: number;
  image: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Physics Textbook",
    price: "200 tk",
    rating: 4.5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Notebook Set (5 Pcs)",
    price: "300 tk",
    rating: 4.0,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Casio fx-991ES Plus",
    price: "250 tk",
    rating: 4.5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Class Notes (CSE)",
    price: "120 tk",
    rating: 4.2,
    image: "https://via.placeholder.com/150",
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="max-w-8xl mx-auto px-4 pt-8">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-sm">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Everything students need, <br />
              from students like you.
            </h1>
            <p className="mt-4 text-gray-600">
              Buy, sell and share books, stationery and subscriptions.
            </p>

            <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Explore Now
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-6 md:mt-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="student"
              className="w-64"
            />
          </div>
        </div>
      </div>

      {/* Popular Items */}
      <div className="max-w-8xl mx-auto px-4 mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Popular Items
          </h2>
          <button className="text-indigo-600 hover:underline">
            View all
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-contain mb-3"
              />

              <h3 className="font-medium text-gray-800">{item.title}</h3>

              <div className="flex justify-between items-center mt-2 text-sm">
                <span className="text-gray-600">{item.price}</span>
                <span className="text-yellow-500 font-medium">
                  ⭐ {item.rating}
                </span>
              </div>

              <button className="mt-3 w-full py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;