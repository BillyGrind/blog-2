const INITIAL_STATE = {
    articles: []
}

function ArticleReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "LOADARTICLES": {
            return {
                ...state,
                articles: action.payload
            }
        }
    }
    return state;
}

export default ArticleReducer;

export const getArticles = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'LOADARTICLES',
                payload: data
            })
        })
}