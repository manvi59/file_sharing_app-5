"use client";
import React, { useState } from 'react'
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {useUser} from '@clerk/nextjs'

import { doc, setDoc } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

import UploadForm from './_components/UploadForm'
import { app } from '@/app/firebaseConfig';
import { generateRandomString } from '@/app/_utils/GenerateRandomString';
// import uploadBtnclick from './_components/UploadForm'

const Upload = () => {

  const{user}=useUser();
  const [progress ,setProgress]=useState();

  const storage=getStorage(app);
   const db = getFirestore(app);

  const uploadFile=(file)=>{

    const metadata = {
      contentType: file.type
    };

    const storageRef = ref(storage, 'file-Upload/'+file?.name);

    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    // Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
(snapshot) => {
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  setProgress(progress);

  // Upload completed successfully, now we can get the download URL
  progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    console.log('File available at', downloadURL);
    saveInfo(file,downloadURL);
  });
   
}, )


  }


const saveInfo=async(file,fileUrl)=>{
  const docId=Date.now().toString();


 
await setDoc(doc(db, "uplodedFile", docId), {
   fileName:file.name,
   fileSize:file.size,
   fileType:file.type,
   fileUrl:fileUrl,
   userEmail:user.primaryEmailAddress.emailAddress,
   userName:user.fullName,
   password:'',
   shortUrl:process.env.NEXT_PUBLIC_BASE_URL+generateRandomString()




}).then(resp=>{
  console.log(resp);
});

}

  return (
    <div className='p-5 px-8 md:px-28'> 
      <h2 className="text=[20] text-center m-5"> Start 
        <strong className="text-primary"> Uploading</strong>  file and  <strong className="text-primary">Share</strong>  it</h2>
      <UploadForm uploadBtnClick={(file)=>uploadFile(file) }
      progress={progress}/>
    </div>
  )
}

export default Upload