class Counter {
constructor(startNum,increment){
    this.startNum = startNum;
    this.increment = increment
}
start(){
    setInterval((function(){
        console.log(this)
        console.log(this.startNum);
        this.startNum += this.increment

    }).bind(this), 1000)
}
}

class Timer {
    constructor() {
      this.tick = 0;
      this.timerId = null;
    }
  
    start() {
        const runTimer = this.increment.bind(this)
        runTimer();

    }
    
    increment () {
       this.timerId = setInterval((function () {
        console.log(this.tick++);
        if(this.tick  >= 5){
            this.stop()
        }
      }).bind(this), 1000);
    }
    
    stop(){
       clearInterval(this.timerId)
    }
  }

  const testTimer = new Timer()

  console.log(testTimer.start())