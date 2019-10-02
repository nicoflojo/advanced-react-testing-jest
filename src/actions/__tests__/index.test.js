import { SAVE_COMMENT } from 'actions/types';
import { saveComment } from 'actions';
import expectExport from 'expect';
import { isTSImportEqualsDeclaration, tsImportEqualsDeclaration } from '@babel/types';

describe('saveComment', () => {
  it('has correct type', () => {
    const action = saveComment();

    expectExport(action.type).toEqual(SAVE_COMMENT);
  });

  it('has correct payload', () => {
    const action = saveComment('New Comment');

    expectExport(action.payload).toEqual('New Comment');
  });
});