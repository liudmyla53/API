import axios from 'axios';


function selectLang(elem) {
    return elem.language.name === 'fr';
}


export async function getDestinationPageInfo(limit=5,offset=0) {
   
   const params=new URLSearchParams({
    limit: limit,
    offset: offset
   }).toString();
    const { data } = await axios.get(`api/destination?${params}`, {
        baseURL: 'http://localhost:8080/'
    });

    return data;
}

export async function getDestinationDetailPageInfo(id) {

    const {data} = await axios.get(`api/destination/${id}`,{
        baseURL: 'http://localhost:8080/'
    })

    return data;
    
}
export async function getDestinationComments(id) {

    const{data} = await axios.get(`api/destination/${id}/comments`,{
        baseURL: 'http://localhost:8080/'
    })
     
    return data;
    
}

export async function postNewComment(destinationId,author,message) {
    const commentData={destinationId,author,message};
    const{data}=await axios.post(`api/destination/${destinationId}/comments`, commentData,{
        baseURL: 'http://localhost:8080/'
    })
    return data;

}