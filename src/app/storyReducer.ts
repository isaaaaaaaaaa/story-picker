function storyReducer(story: any, action: any) {
    switch (action.type) {
        case 'caracterSelected': {
            return {
                selectedCaracter: action.selectedCaracter,
                selectedBook: undefined
            }
        }
        case 'bookSelected': {
            let st = { ...story };
            st.selectedBook = action.selectedBook;
            return st;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default storyReducer;