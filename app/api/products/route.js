import mongoose from "mongoose";
import { Product } from "@/lib/model/product";
import { isValidObjectId } from "mongoose"
import { NextResponse } from "next/server";
import { mongoURL } from "@/lib/db";


// Get Api Create
export async function GET() {
  let data = [];
  let success=true;
  try 
  {
    await mongoose.connect(mongoURL);
    data = await Product.find();

  } 
  catch (error)
   {
    data = {result:"error"}
    success=false
   }
  return NextResponse.json({ result: data, success})
}

// End Get Api 

// Post APi
export async function POST(request)
{
  const payload = await request.json();
   await mongoose.connect(mongoURL)
   let product = new Product (payload);
   const result  = await product.save();
   return NextResponse.json({ result, success:true});

}
