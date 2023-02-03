const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let Clss;
let dob;
app.set("view engine","ejs");
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})


app.post("/",function(req,res)
{
    Clss=req.body.Class;
    dob=req.body.DOB;
    var Name;
    var dateof;
    var Rank;
    var Marks;
    var Percentage;


    var din=new Date();
    var objects={
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };
    if(Clss==6 && dob=="2008-10-05")
    {
        Name="Aditya Thakur";
        dateof="2008-10-05";
        Rank="1";
        Marks="7.5";
        Percentage="75%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2017-09-19")
    {
        Name="Udit Singh";
        dateof="19-09-2017";
        Rank="4";
        Marks="2.5";
        Percentage="25%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==7 && dob=="2007-10-09")
    {
        Name="Rishabh Sengar";
        dateof="09-10-2007";
        Rank="2";
        Marks="3.75";
        Percentage="37.5%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2002-03-12")
    {
        Name="Pushpendra Thakur";
        dateof="12-03-2002";
        Rank="1";
        Marks="7.5";
        Percentage="75%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2010-09-29")
    {
        Name="Prince Sengar";
        dateof="21-12-2007";
        Rank="5";
        Marks="Ab";
        Percentage="Ab";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2011-11-11")
    {
        Name="Divy Pratap Singh";
        dateof="11-11-2011";
        Rank="2";
        Marks="3.75";
        Percentage="37.5%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2007-10-05")
    {
        Name="Yogavansh Raj Singh";
        dateof="05-10-2007";
        Rank="3";
        Marks="3";
        Percentage="30%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else
    {
        res.sendFile(__dirname+"/failure.html");
    }
})

app.post("/failure",function(req,res)
{
    res.redirect("/");
})

// app.post("/Pdf",function(req,res)
// {
//     res.sendFile(__dirname+"/Prince Sengar.pdf");
// })

app.post("/answerscript",function(req,res)
{
    res.sendFile(__dirname+"/Answer Key.pdf");
})


















app.listen(process.env.PORT || 3000,function()
{
    console.log("SErver is running on the port 3000")
})
