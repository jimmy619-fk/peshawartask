import { mongoURL } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server"

export async function PUT(request, content)
{ 

    // Test the put Api with Basic Code Simple
    // console.log(content);
    // const result=[];
    // return NextResponse.json({result,success:true})  
    // Yaha tak check kro tek hain keh nhi agr Status jo hain true per api tek ha
    
   const productId =content.params.productid;
   const filter = {_id:productId}
   const payload = await  request.json();
//    console.log(payload)
   await mongoose.connect(mongoURL);
   const result = await Product.findOneAndUpdate(filter,payload)
   return NextResponse.json({result,success:true})  

}

  


 // Get Api for Single Record Populate in form
export async function GET(request, content)
{
    // Get Api for Single Record Populate 
   const productId =content.params.productid;
   const record = {_id:productId}
   // console.log(payload)
   await mongoose.connect(mongoURL);
   const result = await Product.findById(record)
   return NextResponse.json({result,success:true})  
}


// Delete Api 
export async function DELETE(request , content)

{
    // Remember productid is dynamic like we set [productid] don't make it capital not be delete record
    const productId = content.params.productid;
    const record={_id:productId}
    await mongoose.connect(mongoURL);
    const result = await Product.deleteOne(record);
    return NextResponse.json({result,success:true}) 
}