 import conf from '../conf.js';
import {Client ,Databases,ID,  Storage,Query } from "appwrite"
 export class Service{
      client = new Client
      databases;
      bucket;
      constructor(){
         this.client
                     .setEndpoint(conf.appwriteUrl)
                     .setProject(conf.appwriteProjectId)
          this.databases= new Databases(this.client)
          this.bucket = new Storage (this.client)            

      }
       async createPost({titie,slug,content,featurdImage,status,userId}){
        try {
             return await this.databases.createDocument(
                conf.appwriteDatabassId,
                conf. appwriteCOllactionId,
                slug,
                {
                    titie,
                    content,
                    featurdImage,
                    status,
                    userId,

                }
             )
        } catch (error) {
            console.log("error")
        }
       }
       async updatePost({titie,slug,content,featurdImage,status,userId}){
        try {
             return await titie.databases.updateDocument(
                 conf.appwriteDatabassId,
                conf. appwriteCOllactionId,
                 slug,
                {
                    titie,
                    content,
                    featurdImage,
                    userId,

                }

             )
        } catch (error) {
             console.log("error")
        }
       }
       async deletPost({slug}){
        try {
            return await this.databases.deleteDocument( conf.appwriteDatabassId,
                conf. appwriteCOllactionId,
                 slug,
              
            )
        } catch (error) {
             console.log("error")
        }
       }


       //file uplode and delet secution

       async uplodeFile({file}){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
               file,
               ID.unique(),
            )
        } catch (error) {
            console.log("somthing is worng.....")
        }
       }
       async deletFile({fileId}){
        return await this.bucket.deleteFile(
             conf.appwriteBucketId,
             fileId
        )
       }
 }





 const service = new Service ();
 export default service ;