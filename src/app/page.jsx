// 'use client'
// import Image from 'next/image'
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [hell,setHEll] = useState([])
//   const prodcut = async () =>{
//     let response = await fetch(`https://fakestoreapi.com/products`)
//     // await idhar lagna ja chuuuu
//     response = await response.json();
//     setHEll(response)
//   }
//   // useEffect(prodcut,[])
//   useEffect(()=>{
//     prodcut(); 
//   })
//   return (
//     <div>
// {/* 1 */}
//       {/* <button onClick={prodcut} >farhan</button> */}
//       {/* 1 */}
//       {/* empty map kam nahi kartta */}
//       {hell.length ? 
//         <div>
//           {hell.map((e)=>{
//            return(
//             <div>
//              <h1>{e.id}</h1>
//              <img src={e.image} alt="" />
//              </div>
//            )
//           })}
//         </div>
//         : 
//         <div>
//           <div class="lds-dual-ring"></div>
//         </div>
//        }
//       <h1>not here</h1>
//       <h1>here</h1>
//     </div>
//   )
// }

// import Image from 'next/image'


// const prodcut1 = async () =>{
//   let response = await fetch(`https://fakestoreapi.com/products`)
//   // await idhar lagna ja chuuuu
//   response = await response.json();
//   return response
// }
// export default async function Home() {
//   let product = await prodcut1()
//   return (
//     <div>
// {/* 1 */}
//       {/* <button onClick={prodcut} >farhan</button> */}
//       {/* 1 */}
//       {/* empty map kam nahi kartta */}
//       {product.length ? 
//         <div>
//           {product.map((e)=>{
//            return(
//             <div>
//              <h1>{e.id}</h1>
//              <img src={e.image} alt="" />
//              </div>
//            )
//           })}
//         </div>
//         : 
//         <div>
//           <div class="lds-dual-ring"></div>
//         </div>
//        }
//       <h1>not here</h1>
//       <h1>here</h1>
//     </div>
//   )
// }

// 3rd get body, parms,query,

import Image from 'next/image'


const prodcut1 = async () =>{
  let response = await fetch(`https://fakestoreapi.com/products`)
  // await idhar lagna ja chuuuu
  response = await response.json();
  return response
}
export default async function Home() {
  let product = await prodcut1()
  return (
    <div>
{/* 1 */}
      {/* <button onClick={prodcut} >farhan</button> */}
      {/* 1 */}
      {/* empty map kam nahi kartta */}
      {product.length ? 
        <div>
          {product.map((e)=>{
           return(
            <div>
             <h1>{e.id}</h1>
             <img src={e.image} alt="" />
             </div>
           )
          })}
        </div>
        : 
        <div>
          <div class="lds-dual-ring"></div>
        </div>
       }
      <h1>not here</h1>
      <h1>here</h1>
    </div>
  )
}


