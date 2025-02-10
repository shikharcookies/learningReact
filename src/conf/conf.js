const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL || "",  // Default to an empty string if undefined
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || "",  
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || "",
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID || "",
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID || "",
    tinymceAPI : "7jnn3zt07jlod8em2ed8ma00l4y8gae5v70r5kod2ritmwoo"
};

export default conf;
