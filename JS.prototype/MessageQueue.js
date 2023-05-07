class MessageQueue{
    constructor(){
        this.queue = [];
        this.isRun = false;
    }
    enqueue(msg){
        this.queue.push(msg);
        if(!this.isRun){
            this.processMessages();
        }
    }
    async processMessages(){
        this.isRun = true;
        while(this.queue.length > 0){
            let msg = this.queue.shift();
            await this.processMessage(msg);
        }
        this.isRun = false;
    }
    async processMessage(msg){
        console.log(`processing message: ${msg}`)
        await msg();
    }
}

  
  // Example usage
  const queue = new MessageQueue();
  async function func1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('func1 executed');
  }
  
  async function func2() {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('func2 executed');
  }
  queue.enqueue(func1);
  queue.enqueue(func2);