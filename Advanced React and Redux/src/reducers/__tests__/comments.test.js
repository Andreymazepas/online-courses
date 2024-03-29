import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handels actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);

});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {type: 'QWERTYASDFG'});
    
    expect(newState).toEqual([]);
});
