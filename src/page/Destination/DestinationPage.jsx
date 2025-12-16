//import { useEffect, useState } from "react"
import { Suspense,use, useState } from "react";
import { getDestinationPageInfo } from "../../services/DestinationService";
import { Link } from "react-router";

export default function DestinationPageRequester() {
    const LIMIT=5;
    const [offset,setOffset]=useState(0);
    const promise = getDestinationPageInfo(LIMIT,offset);
    const goToNextPage=()=>{setOffset(prevOffset=>prevOffset+LIMIT)};
    const goToPrevPage=()=>{setOffset(prevOffset=>Math.max(0,prevOffset-LIMIT));};
    return (
        <>
            <div>

           
            <h1>Destinations</h1>
            
            <Suspense fallback = {<DestinationPageLoading/>}>
              <DestinationPage destinationPromise={promise} />
            </Suspense>
            <div style={{ marginTop: '20px' }}>
                <button 
                        onClick={goToPrevPage}
                        disabled={offset === 0} 
                    >

                    </button>
                    <button 
                        onClick={goToNextPage}
                        
                    >
                        
                    </button>
            </div>
            </div>
           
        </>
    );
}
export function  DestinationPage({ destinationPromise }) {

    // ↓ La méthode « use(...) » permet d'utiliser des promesses dans une « simple » fonction react
    const data = use(destinationPromise);

    return (
        <>
            
            
            <ul>
                {data.map(dest=>{
                    return <li key={dest.id}>
                        <Link to={`/destination/${dest.id}`}>
                          {dest.name}
                        </Link>
                        </li>
                })}
            </ul>
            
        
            
        </>
    );
}

export function DestinationPageLoading() {
    return (
        <div> ⏳ Chargement du destantion en cours... !</div>
    )
}