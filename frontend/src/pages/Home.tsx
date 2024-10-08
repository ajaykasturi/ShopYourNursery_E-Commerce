// import React, { Suspense } from "react";
// const DiscoverCategories = React.lazy(
//   () => import("../components/DiscoverCategories/DiscoverCategories")
// );
// const CustomerReviews = React.lazy(
//   () => import("../components/Reviews/CustomerReviews")
// );
// const Vase = React.lazy(() => import("../components/Vase/Vase"));
// export default function Home() {
//   return (
//     <>
//       <Suspense
//         fallback={
//           <div className="flex justify-center items-center h-screen font-semibold text-xl">
//             Loading Products...
//           </div>
//         }
//       >
//         <DiscoverCategories />
//       </Suspense>
//       <Suspense
//         fallback={
//           <div className="flex justify-center items-center h-screen font-semibold text-xl">
//             Loading Products...
//           </div>
//         }
//       >
//         <Vase />
//       </Suspense>
//       <Suspense
//         fallback={
//           <div className="flex justify-center items-center h-screen font-semibold text-xl">
//             Loading Products...
//           </div>
//         }
//       >
//         <CustomerReviews />
//       </Suspense>
//     </>
//   );
// }



import React, { Suspense } from "react";
const DiscoverCategories = React.lazy(
  () => import("../components/DiscoverCategories/DiscoverCategories")
);
const CustomerReviews = React.lazy(
  () => import("../components/Reviews/CustomerReviews")
);
const Vase = React.lazy(() => import("../components/Vase/Vase"));

const Navbar=React.lazy(()=> import("../components/Homescreen/Navbar"))
const Carousel=React.lazy(()=>import("../components/Homescreen/Carousel"))
const SearchBar=React.lazy(()=>import ("../components/Homescreen/SearchBar"))


export default function Home() {
  return (
    <>
    <Suspense
     fallback={
      <div className="flex justify-center items-center h-screen font-semibold text-xl">
        Loading Products...
      </div>
    }
    >
   <Navbar/>
    </Suspense>

    <Suspense
     fallback={
      <div className="flex justify-center items-center h-screen font-semibold text-xl">
        Loading Products...
      </div>
    }
    >
   <Carousel/>
    </Suspense>

    <Suspense
     fallback={
      <div className="flex justify-center items-center h-screen font-semibold text-xl">
        Loading Products...
      </div>
    }
    >
      <SearchBar/>
    </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen font-semibold text-xl">
            Loading Products...
          </div>
        }
      >
        <DiscoverCategories />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen font-semibold text-xl">
            Loading Products...
          </div>
        }
      >
        <Vase />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen font-semibold text-xl">
            Loading Products...
          </div>
        }
      >
        <CustomerReviews />
      </Suspense>
    </>
  );
}
