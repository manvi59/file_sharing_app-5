'use client'
import React ,{useEffect, useState} from 'react'
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { app } from "@/app/firebaseConfig";
import Image from 'next/image';
import file_img from '@/public/file_img.jpg'
// import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';

const FilePreview = ({params}) => {

  const db = getFirestore(app);
  const [file ,setFile]=useState();
  const [fileName ,setFileName]=useState();
  const [shortUrl ,setShortUrl]=useState();
  const [fileUrl ,setFileUrl]=useState();
  const [email,setEmail]=useState();
  const {user}=useUser();
    useEffect(()=>{
        console.log(params?.fileId)
        params?.fileId&&getFileInfo();
    },[])

    const getFileInfo=async()=>{

      const docRef = doc(db, "uplodedFile", params?.fileId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data()
      );
        setFile(docSnap.data());
        setFileName(docSnap.data().fileName)
        setShortUrl(docSnap.data().shortUrl)
        setFileUrl(docSnap.data().fileUrl
      )
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }

      // console.log(file);

       

    }

    // const SendEmail=()=>{

    //   const data={
    //     emailToSend:email,
    //     userName:user?.fullName,
    //     fileName:file.fileName,
    //     fileSize:file.fileSize,
    //     fileType:file.fileType,
    //     shortUrl:file.shortUrl
    //   };
    //   GlobalApi.SendEmail(data).then(resp=>{
    //     console.log(resp);
    //   });

    // }
    
  return (
     <>
     <div className='main font-serif'>
      <div className='flex p-10'>
        <a href='#' className='font-bold '>Go To the Upload</a>
      </div>

      <div className="grid md:grid-cols-2 p-10 ">

        <div className='  flex justify-center p-10 border border-slate-400 rounded-md'>

          <div>
          <Image src={file_img} height={300} width={300} alt="file image"/>
          <label className='font-bold  flex justify-center py-2'>{ fileName
}</label>
          

          </div>
          

        </div>

        <div className='p-10 border border-slate-100 rounded-md'>
          <div className='space-y-3'>

          <div className='space-y-2'>

           <div><label className='font-bold'>Short Url</label> </div>
              <h1  className='border border-slate-300 w-full h-10 rounded-md'>{shortUrl}</h1>

          </div>

          <div className='space-y-2'>

           <div><label className='font-bold'>File Url</label> </div>
              <a href={fileUrl} target="_blank" className='border border-slate-300 w-full  rounded-md'>{fileUrl}</a>

          </div>

          

          <div className='space-y-2'>

              <div><label className='font-bold'>Send File to Email</label> </div>
                <div>
                  <input type='email' placeholder='example@gmail.com' name='email' id='email' className='border border-slate-300 w-full h-10 rounded-md' />
                </div>

                <div>
                  <button   className='bg-primary text-white w-full h-10 rounded-md font-bold hover:bg-blue-400' >Send Email</button>
                </div>

              </div>


           


          </div>
          

        </div>


      </div>

     </div>
     </>
  )
}

export default FilePreview