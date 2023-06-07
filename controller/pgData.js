import pg from "../model/pgModel.js";
import nodemailer from "nodemailer";
import mailGun from "nodemailer-mailgun-transport";

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

// export const postData=async(req,res)=>{
//     const data=req.body;
//     console.log(data);
//     const smtpTransport=nodemailer.createTransport({
//         service:"Gmail",
//         port:465,
//         auth:{
//             type:"OAuth2",
//             user:"mayankShrm101@gmail.com",
//             pass:"27november",
//             clientId: "444122665292-rbemoogs1sa602ql8l22l5j70j7ptp15.apps.googleusercontent.com",
//        clientSecret: "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",
//        refreshToken: "1//04cf6MulD4BKzCgYIARAAGAQSNwF-L9IrYxTAXSdeI4OuA3N0Cv9c9fw_P9KOE5T0BayTRmwZzAljgkThe2WU8106ZOOhqpBLADc",
//         }
//     });
//     smtpTransport.verify((err, success) => {
//         err
//           ? console.log(err)
//           : console.log(`=== Server is ready to take messages: ${success} ===`);
//        });
// const mailOptions={
//     from:"sharmas@jkmail.com",
//     to:"mayankShrm101@gmail.com",
//     subject:`Message from ${data.FullName}`,
//     html:`
//     <h3>Information </h3>
//     <ul>
// <li>Name:${data.FullName}</li>
// <li>Date:${data.Date}</li>
// <li>Email:${data.Email}<s/li>
//     </ul>
//     `


    
// };
// smtpTransport.sendMail(mailOptions,function(error,data){
//     if(error){
//         res.send(error)
//     }
//     else{
//         res.send("succes");
//     }
// })
// smtpTransport.close();
//     }
   
export const postData=async(req,res)=>{
    const data=req.body;
    console.log(data);
    const smtpTransport=nodemailer.createTransport({
        service:"Godaddy",
        host: "smtpout.secureserver.net",
        port:465,
        auth:{
            user:"info@sibilize.com",
            pass:"Sibilizehospitality@312",
            
        }
    });
    smtpTransport.verify((err, success) => {
        err
          ? console.log(err)
          : console.log(`=== Server is ready to take messages: ${success} ===`);
       });
const mailOptions={
    from:data.Email,
    to:"info@sibilize.com",
    subject:`Message from ${data.FullName}`,
    html:`
    <h1>Information for Visit Schedule</h1>
    <ul>
<li><h2>Name:${data.FullName}</h2></li>
<li>Date:${data.Date1.split("T")}</li>
<li>Email: ${data.Email}</li>
<li>Phone: ${data.Phone}
<li>Profession: ${data.Radio}</li>
<li>PG: ${data.pg}</li>
    </ul>
    `


    
};
smtpTransport.sendMail(mailOptions,function(error,data){
    if(error){
        res.send(error)
    }
    else{
        res.send("succes");
    }
})
smtpTransport.close();
    }



    export const postData2=async(req,res)=>{
        const data=req.body;
        console.log(data);
        const smtpTransport=nodemailer.createTransport({
            service:"Godaddy",
            host:"smtpout.secureserver.net",
            port:465,
            auth:{
                user:"info@sibilize.com",
                pass:"Sibilizehospitality@312",
                
            }
        });
        smtpTransport.verify((err, success) => {
            err
              ? console.log(err)
              : console.log(`=== Server is ready to take messages: ${success} ===`);
           });
    const mailOptions={
        from:data.Email,
        to:"info@sibilize.com",
        subject:`Reservation from ${data.FullName}`,
        html:`
        <h1>Information for Reservation</h1>
        <ul>
    <li><h2>Name:${data.FullName}</h2></li>
    <li>Email: ${data.Email}</li>
    <li>Profession: ${data.Radio}</li>
    <li>Phone Number: ${data.Phone}</li>
        </ul>
        `
    
    
        
    };
    smtpTransport.sendMail(mailOptions,function(error,data){
        if(error){
            res.send(error)
        }
        else{
            res.send("succes");
        }
    })
    smtpTransport.close();
        }


        export const postData3=async(req,res)=>{
            const data=req.body;
            console.log(data);
            const smtpTransport=nodemailer.createTransport({
                service:"Godaddy",
                port:465,
                auth:{
                    user:"info@sibilize.com",
                    pass:"Sibilizehospitality@312",
                    
                }
            });
            smtpTransport.verify((err, success) => {
                err
                  ? console.log(err)
                  : console.log(`=== Server is ready to take messages: ${success} ===`);
               });
        const mailOptions={
            from:data.Email,
            to:"info@sibilize.com",
            subject:`Franchise related talk ${data.FullName}`,
            html:`
            <h1>Information for Reservation</h1>
            <ul>
        <li><h2>Name:${data.FullName}</h2></li>
        <li>Email: ${data.Email}</li>
    
        <li>Phone Number: ${data.Phone}</li>
            </ul>
            `
        
        
            
        };
        smtpTransport.sendMail(mailOptions,function(error,data){
            if(error){
                res.send(error)
            }
            else{
                res.send("succes");
            }
        })
        smtpTransport.close();
            }