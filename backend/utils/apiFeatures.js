// making class apifeatures
class APIFeatures
{
    constructor(query, queryString)
    {
        this.query = query;
        this.queryString = queryString;
    }
    // searching
    search()
    {
        const keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword,
                $options: 'i'  // case insensitive
            }
        } : {}
        console.log(keyword);
        this.query = this.query.find({ ...keyword });
        return this;
    }
    // filtering
    // filter
    filter()
    {
        const queryObj = { ...this.queryString };
        console.log(queryObj);
        // removing some fields for category
        const removeFields = ['keyword', 'limit', 'page'];
        removeFields.forEach(el => delete queryObj[el]);
        console.log(queryObj);

        
        let queryString = JSON.stringify(queryObj);
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        this.query = this.query.find(JSON.parse(queryString));
        // console.log(queryString)
        // this.query = this.query.find(queryObj);
        return this;
    }

     // pagination
     paginate(resPerPage)
     {
         const currentPage = Number(this.queryString.page)|| 1;
         const skip =resPerPage*(currentPage - 1);
         this.query = this.query.skip(skip).limit(resPerPage);
         return this;
     }
    // sorting
    // sort()
    // {
    //     if (this.queryString.sort)
    //     {
    //         const sortBy = this.queryString.sort.split(',').join(' ');
    //         this.query = this.query.sort(sortBy);
    //     }
    //     else
    //     {
    //         this.query = this.query.sort('-createdAt');
    //     }
    //     return this;
    // }
    // field limiting
    // limitFields()
    // {
    //     if (this.queryString.fields)
    //     {
    //         const fields = this.queryString.fields.split(',').join(' ');
    //         this.query = this.query.select(fields);
    //     }
    //     else
    //     {
    //         this.query = this.query.select('-__v');
    //     }
    //     return this;
    // }
   
}



// class ApiFeatures{
//     constructor(qu)
// }
// export modules
module.exports = APIFeatures;