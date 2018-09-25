import { firestore } from './firebase';

export const addNewSemester = (semesterName, uid) => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.update({
        [`${semesterName}`]: {}
    })
    .then( res => {
        console.log('done')
    })
}

export const addNewClass = (className, semesterName, uid) => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.update({
        [`${semesterName}.${className}`]: {}
    })
    .then( () => {
        console.log('done')
    })
}

export const getGradeInfo = uid => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.get();
}