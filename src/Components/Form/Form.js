import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Form.css'


export default function Form() {
    const [article, setArticle] = useState({
        title: "",
        body: ""
    });

    const addNewTitle = e => {
        const newObjState = { ...article, title: e.target.value }
        setArticle(newObjState)
    }
    const addNewBody = e => {
        const newObjState = { ...article, body: e.target.value }
        setArticle(newObjState)
    }
   
    const dispatch = useDispatch()
    
    const handleForm = e => {
        e.preventDefault();
        const newArticle = {
            title: article.title,
            body: article.body
        }
        dispatch({
            type: "ADDARTICLE",
            payload: article
        })
        setArticle({
            title: "",
            body: ""
        })
    }

    return (
        <>
            <h1 className="title-form">Écrivez un article</h1>
            <form
                className="container-form"
                onSubmit={handleForm}
            >

                <label htmlFor="title">Titre</label>
                <input type="text"
                    value={article.title}
                    onInput={addNewTitle}
                    id="title"
                    placeholder="Entrez le tire" />
                <label htmlFor="article">Votre article</label>
                <textarea
                    value={article.body}
                    onInput={addNewBody}
                    id="article"
                    placeholder="Votre article"></textarea>
                <button>Envoyer l'article</button>

            </form>
        </>
    )
}
