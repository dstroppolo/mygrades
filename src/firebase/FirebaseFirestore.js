import { firestore } from './firebase';
import firebase from 'firebase';

export const addNewSemester = (semesterName, uid) => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.update({
        [`${semesterName}`]: {}
    })
    .then( () => {
        console.log('done');
    })
}

export const addNewClass = (className, semesterName, uid) => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.update({
        [`${semesterName}.${className}`]: {}
    })
    .then( () => {
        console.log('done');
    })
}

export const getGradeInfo = uid => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.get();
}

export const addNewAssignment = (assignmentName, className, semesterName, uid) => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.update({
        [`${semesterName}.${className}.${assignmentName}`]: 0
    })
    .then( () => 
        console.log('done')
    )
}

export const removeAssignment = (assignmentName, className, semesterName, uid) => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.update({
        [`${semesterName}.${className}.${assignmentName}`]: firebase.firestore.FieldValue.delete()
    })
    .then( () => 
        console.log('done')
    )
}

export const addAssignmentWeight = (assignmentWeight, assignmentName, className, semesterName, uid) => {
    let semesterDocRef = firestore.collection('userGradeInfo').doc(uid);
    return semesterDocRef.update({
        [`${semesterName}.${className}.${assignmentName}`]: assignmentWeight
    })
    .then( () => 
        console.log('done')
    )
}