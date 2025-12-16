import { useParams } from "react-router";
import { getDestinationComments, getDestinationDetailPageInfo} from "../../services/DestinationService";
import { Suspense, use} from "react";
import CommentListAndForm from "./CommentListAndForm";



 export default function DestinationDetailPage() {
    const { id } = useParams();
    const destinationPromise = getDestinationDetailPageInfo(id);
    const commentsPromise=getDestinationComments(id);
    return (
        <>
            <Suspense fallback={<div>⏳</div>}>
                <DestinationDetailPageContent destinationPromise={destinationPromise}
                commentsPromise={commentsPromise} />
            </Suspense>

        </>
    )}

 function DestinationDetailPageContent({destinationPromise, commentsPromise}) {
        
        const destination = use(destinationPromise);
        const comments = use(commentsPromise);
        
        return <div>
            <h2>{destination.name} ({destination.country})</h2>
            <img src={`http://localhost:8080${destination.imageUrl}`} alt={`foto city ${destination.name}`} />
            <p>{destination.shortDescription}</p>
            <p>{destination.fullDescription}</p>
            <h2>Commentaire</h2>
            
                
               <CommentListAndForm
                    destinationId={destination.id}
                    initialComments={comments}
              />
           
           
        </div>
    }


