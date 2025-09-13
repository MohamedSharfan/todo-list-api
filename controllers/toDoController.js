


let todos =[
    {id:1, title:"meet the doctor", body:"get medicine"}
]

const getTodos = (req,res)=>{
    res.json(todos);
}

const addTodo = (req,res)=>{
    const { title, body } = req.body;
    const newTodo = {id: todos.length +1, title:title, body:body };
    todos.push(newTodo);
    res.status(201).json(newTodo);
}

const updateTodo = (req,res)=>{
    const id = parseInt(req.params.id);
    if(id){
        const { title, body } = req.body;
        let todo = todos.find(t => t.id == id);
        if(!todo){
            res.status(500).json({"message":"Something went wrong"});
        }
        todo.title = title || todos.title;
        todo.body = body || todos.body ;
        res.status(200).json({"success":"successfully added"});
    }
    else{
        res.status(404).json("id not found");
    }
}

const deleteTodo = (req,res) =>{
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id == id);
    if(index !== -1){
        const deletedTodo = todos.splice(index,1);
        res.status(200).json({
        message: "Successfully deleted",
        deleted: deletedTodo[0]
        });
    }else{
        res.status(500).json("Something went wrong");
    }
}


module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
