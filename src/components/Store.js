// import React, { useContext, useState } from 'react';

// // Component
// import Product from './shared/Product'
// import Header from './Header';
// import Banner from './Banner'
// import Filter from './Filter';
// import Footer from './shared/Footer';

// // Context
// import { ProductsContext } from '../context/ProductContextProvider';

// const Store = () => {

//     const products = useContext(ProductsContext)

//     const [search, setSearch] = useState ("");

//     const searchHandler = event => {
//         setSearch(event.target.value)
//     }

//     const searchProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

//     return (
//         <>
//             <Header />
//             <div className='m-4'>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='absolute mt-2 mx-2 bg-white rounded-full'>
// 	                <g fill="none" stroke="black">
// 		            <circle cx="11" cy="11" r="6" />
// 		            <path stroke-linecap="round" d="m20 20l-3-3" />
// 	                </g>
//                 </svg>
//                 <input type='text' placeholder='Search by name...' value={search} onChange={searchHandler} className='w-full bg-gray text-sm rounded-full focus:outline-none py-1 pl-10 leading-8' />
//             </div>
//             <Banner />
//             <div className='flex flex-col justify-center'>
//                 <Filter />
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-row lg:px-20 px-2">
//                     {
//                         searchProducts.map(product => <Product key={product.id} productData={product} />)
//                     }
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Store;

import React, { useContext, useState } from 'react';

// Component
import Product from './shared/Product'
import Header from './Header';
import Banner from './Banner'
import Filter from './Filter';
import Timer from './Timer';
import Footer from './shared/Footer';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'All' || product.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Timer />
            <Header />
            <div className='sticky top-0 z-50'>
                <div className='flex justify-center items-center py-2'>
                    <input type='text' placeholder='Search by name...' value={search} onChange={searchHandler} className='w-full bg-black/70 backdrop-blur-xl rounded-full outline-none py-2 px-3 mx-4 text-sm text-gray leading-8' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='absolute right-8'>
                        <g fill="none" stroke="gray">
                    <circle cx="11" cy="11" r="6" />
                    <path stroke-linecap="round" d="m20 20l-3-3" />
                        </g>
                    </svg>
                </div>
            </div>
            <Banner />
            <div className='flex flex-col justify-center'>
                <Filter setCategory={setCategory} />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row px-2">
                    {
                        filteredProducts.map(product => <Product key={product.id} productData={product} />)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Store;