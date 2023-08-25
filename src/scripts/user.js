class User {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML= "<h1>It's ALIVE!!</h1>";

        this.ele.addEventListener("click", this.handleClick.bind(this));
       
    }

    

    createNewScenario() {
        
    }

    deleteScenario() {
        
    }
};

export default User