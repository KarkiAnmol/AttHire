class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
    search(){
        const keyword= this.queryStr.keyword ?{
            //if keyword is found
            name:{
                $regex:this.queryStr.keyword,
                $options : "i", //small i makes the keyword case insensitive 

                 },
        }
        :{
            //if keyword is not found
        };
this.query=this.query.find({...keyword});
return this;
    }
};
module.exports =ApiFeatures;