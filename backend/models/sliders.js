const mongoose=require('mongoose');
const SlidersSchema=new mongoose.Schema({
    ShortDescription:String,
    LongDescriptionHead:String,
    LongDescriptionMiddle:String,
    LongDescriptionFooter:String,
  

    
});

const sliders=new mongoose.model("sliders",SlidersSchema);
module.exports=sliders;