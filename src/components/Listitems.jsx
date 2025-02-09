
import React from "react";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4 py-4 scrollbar-none">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;












// import React, { useState } from "react";

// function Listitems() {
//   const categories = [
//     "All",
//     "Music",
//     "React routers",
//     "Computer programming",
//     "Reverberation",
//     "Movie musicals",
//     "India national cricket",
//     "News",
//     "Mixes",
//     "1990s",
//     "Telugu cinema",
//     "Live",
//     "Dramedy",
//     "Dubbing",
//     "Indian soap opera",
//     "Cricket",
//     "Football",
//     "Learn Coding",
//   ];

//   // State to track if the scrollbar should be visible
//   const [showScrollbar, setShowScrollbar] = useState(false);

//   return (
//     <>
//       {/* Inline custom scrollbar styles */}
//       <style>
//         {`
//           .custom-scrollbar::-webkit-scrollbar {
//             height: 5px; /* Adjust height for horizontal scrollbar */
//             display: ${showScrollbar ? "block" : "none"}; /* Show scrollbar only when mouse is over */
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb {
//             background: #888; /* Thumb color */
//             border-radius: 10px; /* Rounded edges */
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//             background: #555; /* Thumb hover color */
//           }
//           .custom-scrollbar::-webkit-scrollbar-track {
//             background: #f1f1f1; /* Track background */
//           }
//         `}
//       </style>

//       <div
//         className="flex overflow-x-scroll custom-scrollbar px-4 py-3"
//         onMouseEnter={() => setShowScrollbar(true)} // Show scrollbar on hover
//         onMouseLeave={() => setShowScrollbar(false)} // Hide scrollbar when hover ends
//       >
//         <div className="flex space-x-4 flex-nowrap">
//           {categories.map((category) => {
//             return (
//               <div
//                 key={category}
//                 className="flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
//               >
//                 {category}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Listitems;
