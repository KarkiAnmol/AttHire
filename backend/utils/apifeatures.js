class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
    search(){
        const keyword= this.queryStr.keyword ?
        {
            //if keyword is found
            name:{
                $regex:this.queryStr.keyword,
                $options : "i", //small i makes the keyword case-insensitive 

                 },
        }
        :{    //if keyword is not found
        };
        
        this.query=this.query.find({...keyword});
        return this;
    }


    filter(){
        const queryCopy ={...this.queryStr};//using {...this.queryStr} instead of this.queryStr so that this object is not passed by reference which prevents its original data from being altered

        const removeFields =["keyword","page","limit"];
        removeFields.forEach(key=>delete queryCopy[key]) // removing the array of words from queryCopy
        
        //Filter for price and ratings
        console.log(queryCopy);
        let queryStr= JSON.stringify(queryCopy);//converting object to a JSON string


        queryStr=queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`)
        // console.log(queryStr);


        this.query =this.query.find(JSON.parse(queryStr));//converting string into an object
        console.log(queryStr);

        return this;


    }

};
module.exports =ApiFeatures;