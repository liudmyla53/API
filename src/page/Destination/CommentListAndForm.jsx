import { useState } from "react";
import { postNewComment } from "../../services/DestinationService";

export default function CommentListAndForm({ destinationId, initialComments }) {

    // const [comments, setComments] = useState(initialComments);
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        if (!author.trim() || !message.trim()) return;
        try {
            const newComment = await postNewComment(destinationId, author, message)
            // setComments(prevComments => [...prevComments, newComment])
            setAuthor('');
            setMessage('');

            //! Faire la requete AJAX Post pour envoyer le commentaire
        }
        catch (error) { console.error('Erreur lors de lenvoi du commentaire:', error) }

    }
    return (
        <>
            {/* <h3>Commentaire: {comments.length}</h3>
            {
                comments.length === 0 ? (<p>Soyez le premier à commenter !</p>) : (
                    <ul>
                        {comments.map(c => (
                            <li key={c.id}>
                                {c.author}: {c.text}
                            </li>
                        ))}
                    </ul>
                )
            } */}
            <h4>Laisser un commentaire</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Votre nom"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
                <textarea
                    placeholder="Votre message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type="submit">Envoyer</button>
            </form>

        </>
    )


}