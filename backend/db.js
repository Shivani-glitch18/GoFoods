const mongoose = require('mongoose');
//const { Await } = require('react-router-dom');

const mongoURI = 'mongodb://goFood:Shivi%4018@ac-poxsthj-shard-00-00.c275nai.mongodb.net:27017,ac-poxsthj-shard-00-01.c275nai.mongodb.net:27017,ac-poxsthj-shard-00-02.c275nai.mongodb.net:27017/goFoodMern?ssl=true&replicaSet=atlas-14mvh2-shard-0&authSource=admin&retryWrites=true&w=majority'
// Connect to MongoDB

const mongoDB=async()=>{
 await mongoose.connect(mongoURI,{ useNewUrlParser:true},async(err,result)=>{
    if(err) console.log("---",err)
    else{
    console.log("connected");
    const fetched_data =  await mongoose.connection.db.collection("food_item");
    fetched_data.find({}).toArray(async function(err, data){
      const foodCategory =  await mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function(err, catData){
        if(err) console.log(err);
        else {
            global.food_items = data;
            global.foodCategory = catData;
         }
    })
   }
    )

  }
});
}
// mongoose.connect('mongodb://goFood:Shivi%4018@ac-poxsthj-shard-00-00.c275nai.mongodb.net:27017,ac-poxsthj-shard-00-01.c275nai.mongodb.net:27017,ac-poxsthj-shard-00-02.c275nai.mongodb.net:27017/goFoodMern?ssl=true&replicaSet=atlas-14mvh2-shard-0&authSource=admin&retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then(() => {
//       console.log('Connected to MongoDB');
//       const fetched_data =  mongoose.connection.db.collection("food_item");
//     })
//     .catch((error) => {
//       console.error('Error connecting to MongoDB:', error);
//     });
    
// };

module.exports = mongoDB;