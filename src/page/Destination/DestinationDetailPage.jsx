import { useParams } from "react-router";
import { getDestinationDetailPageInfo} from "../../services/DestinationService";
import { Suspense, use} from "react";
import CommentListAndForm from "./CommentListAndForm";



 export default function DestinationDetailPage() {
    const { id } = useParams();
    const promise = getDestinationDetailPageInfo(id);
    return (
        <>
            <Suspense fallback={<div>⏳</div>}>
                <DestinationDetailPageContent detailPromise={promise} />
            </Suspense>

        </>
    )}

 function DestinationDetailPageContent({ detailPromise }) {
        
        const destination = use(detailPromise);
        
        
        return <div>
            <h2>{destination.name} ({destination.country})</h2>
            <img src={`http://localhost:8080${destination.imageUrl}`} alt={`foto city ${destination.name}`} />
            <p>{destination.shortDescription}</p>
            <p>{destination.fullDescription}</p>
            <h2>Commentaire</h2>
            
                
               <CommentListAndForm
                    destinationId={destination.id}
                    initialComments={destination.comments}
              />
           
           
        </div>
    }


