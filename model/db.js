const mongoose= require ('mongoose');
try {
    const db = mongoose.connect('mongodb+srv://merntest:mernstack@cluster0.us5jj.mongodb.net/mern-stack?retryWrites=true&w=majority',()=>{
        console.log('connected with database successfully')
    })
    
} catch (error) {
    console.log('connection failed',error)
}
