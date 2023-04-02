import pg from "../model/pgModel.js";


export const getPost= async (req,res)=>{
    try{
        const query1=req.query;
        const postMessage =await pg.find(query1);
        res.status(200).json(postMessage);
    }
    catch(error){
res.status(404).json({message:error.message})
    }
}

export const getPostid=async(req,res)=>{
    try{
        const pgdata=await pg.findById(req.params.id);
        res.status(200).json(pgdata);
    }
    catch(error){
        res.status(404).json({message:error.message})
}
}


