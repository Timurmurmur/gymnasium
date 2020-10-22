import { loadProfileSuccess, loadProfileError, LOAD_PROFILE, LOAD_SELECTED_PROFILE, loadSelectedProfileError, loadSelectedProfileSuccess, loadSelectedProfile } from '../actions/profile';
import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap, mapTo } from "rxjs/operators";
import { loadDocumentsError, loadDocumentsSuccess, UPLOAD_DOCUMENTS, uploadDocumentsSuccess, uploadDocumentsError, LOAD_DOCUMENTS, deleteDocumentSuccess, deleteDocumentError, loadDocuments, DELETE_DOCUMENT } from '../actions/documents';
import { FuncEpic } from '../../common/types';

const documentsEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_DOCUMENTS),
        switchMap(() => {
            return from(deps.documentsDataProvider.loadDocuments(store$.value.profile.selectedProfile)).pipe(
                switchMap(documents => {
                    return of(loadDocumentsSuccess(documents))
                }),
                catchError(err => {
                    return of(loadDocumentsError(err))
                })
            )
        })
    )
}

const uploadDocumentsEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(UPLOAD_DOCUMENTS),
        switchMap(({ file }) => {
            return from(deps.documentsDataProvider.uploadDocument(file, store$.value.profile.selectedProfile.id)).pipe(
                switchMap(result => {
                    console.log(result)
                    return of(uploadDocumentsSuccess(), loadDocuments())
                }),
                catchError(err => {
                    return of(uploadDocumentsError(err))
                })
            )
        })
    )
}

const deleteDocumentsEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(DELETE_DOCUMENT),
        switchMap(({ file_name }) => {
            return from(deps.documentsDataProvider.deleteDocument(file_name)).pipe(
                switchMap(() => {
                    return of(deleteDocumentSuccess(), loadDocuments())
                }),
                catchError(err => {
                    return of(deleteDocumentError(err))
                })
            )
        })
    )
}




export const documentsEpics = combineEpics(documentsEpic, uploadDocumentsEpic, deleteDocumentsEpic)