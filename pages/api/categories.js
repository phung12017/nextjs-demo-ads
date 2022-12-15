// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from 'nextjs-cors';

export default function handler(req, res) {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

  res.status(200).json({ "categories":[

    {
      "id":1,
      'title':'Women',
      'imageUrl':"https://images.unsplash.com/photo-1639926783705-34fedf78685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
       'tags':['Accessories',"Dresses","Pants","Shoes","T-shirt","Tops"]
    },
    {
      'id':2,
      'title':'Men',
      'imageUrl':"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      'tags':['Accessories',"Clothing","Pants","Shoes","Shorts","T-shirt","Tops"]
    },
    {
      'id':3,
      'title':'Kids',
      'imageUrl':"https://images.unsplash.com/photo-1470071131384-001b85755536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80",
      'tags':[]
    },
    {
      'id':4,
      'title':'Sport',
      'imageUrl':'https://images.unsplash.com/photo-1557161050-7ad63e9f5a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'tags':[]
    },
    {
      'id':5,
      'title':'Decor',
      'imageUrl':'https://images.unsplash.com/photo-1552058301-c08979f1b1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'tags':["Art","Pillow","Room Accessories"]
    }

  ] })
}
